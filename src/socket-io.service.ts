import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import * as io from 'socket.io-client';

import { SocketIoConfig } from './config/socket-io.config';

export class WrappedSocket {
  subscribersCounter: Record<string, number> = {};
  eventObservables$: Record<string, Observable<any>> = {};
  ioSocket: any;
  emptyConfig: SocketIoConfig = {
    url: '',
    options: {},
  };

  constructor(private config: SocketIoConfig) {
    this.configure(config);
  }

  configure(config: SocketIoConfig) {
    if (config === undefined) {
      this.config = this.emptyConfig;
    }
    const url: string = config.url;
    const options: any = config.options;
    const ioFunc = (io as any).default ? (io as any).default : io;
    this.ioSocket = ioFunc(url, options);
  }

  of(namespace: string) {
    this.ioSocket.of(namespace);
  }

  on(eventName: string, callback: Function) {
    this.ioSocket.on(eventName, callback);
  }

  once(eventName: string, callback: Function) {
    this.ioSocket.once(eventName, callback);
  }

  connect(callback?: (err: any) => void) {
    return this.ioSocket.connect(callback);
  }

  disconnect(_close?: any) {
    return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
  }

  emit(_eventName: string, ..._args: any[]) {
    return this.ioSocket.emit.apply(this.ioSocket, arguments);
  }

  removeListener(_eventName: string, _callback?: Function) {
    return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
  }

  removeAllListeners(_eventName?: string) {
    return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
  }

  fromEvent<T>(eventName: string): Observable<T> {
    if (!this.subscribersCounter[eventName]) {
      this.subscribersCounter[eventName] = 0;
    }
    this.subscribersCounter[eventName]++;

    if (!this.eventObservables$[eventName]) {
      this.eventObservables$[eventName] = new Observable((observer: any) => {
        const listener = (data: T) => {
          observer.next(data);
        };
        this.ioSocket.on(eventName, listener);
        return () => {
          this.subscribersCounter[eventName]--;
          if (this.subscribersCounter[eventName] === 0) {
            this.ioSocket.removeListener(eventName, listener);
            delete this.eventObservables$[eventName];
          }
        };
      }).pipe(share());
    }
    return this.eventObservables$[eventName];
  }

  fromOneTimeEvent<T>(eventName: string): Promise<T> {
    return new Promise<T>(resolve => this.once(eventName, resolve));
  }

  listeners(eventName: string) {
    return this.ioSocket.listeners(eventName);
  }

  listenersAny() {
    return this.ioSocket.listenersAny();
  }

  listenersAnyOutgoing() {
    return this.ioSocket.listenersAnyOutgoing();
  }

  off(eventName?: string, listener?: Function[]) {
    if (!eventName) {
      // Remove all listeners for all events
      return this.ioSocket.offAny();
    }

    if (eventName && !listener) {
      // Remove all listeners for that event
      return this.ioSocket.off(eventName);
    }

    // Removes the specified listener from the listener array for the event named
    return this.ioSocket.off(eventName, listener);
  }

  onAny(callback: (event: string, ...args: any[]) => void) {
    return this.ioSocket.onAny(callback);
  }

  onAnyOutgoing(callback: (event: string, ...args: any[]) => void) {
    return this.ioSocket.onAnyOutgoing(callback);
  }

  prependAny(callback: (event: string, ...args: any[]) => void) {
    return this.ioSocket.prependAny(callback);
  }

  prependAnyOutgoing(
    callback: (event: string | symbol, ...args: any[]) => void
  ) {
    return this.ioSocket.prependAnyOutgoing(callback);
  }

  timeout(value: number) {
    return this.ioSocket.timeout(value);
  }

  volatile() {
    return this.ioSocket.volatile;
  }
}
