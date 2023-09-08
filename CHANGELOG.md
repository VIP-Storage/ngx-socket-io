# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.5.3] - 2023-09-08

### Update
- Removes unneeded files from package tarball

## [4.5.2] - 2023-09-08

### Added
- `reconfigure` Method.

### Update

- Bump 'corejs' to v3.32.2
- Bump 'zone.js' to v0.13.1


## [4.5.1] - 2023-05-11

### Added

- `listeners` Method.
- `listenersAny` Method.
- `listenersAnyOutgoing` Method.
- `off` Method.
- `onAny` Method.
- `onAnyOutgoing` Method.
- `prependAny` Method.
- `prependAnyOutgoing` Method.
- `timeout` Method.
- `volatile` Method.

## [4.5.0] - 2023-05-11

### Added

- `forceNew` option

### Update

- Bump `@angular` dependencies to v16.0.0.
- Bump `ng-packagr` dependencies to v16.0.0.

## [4.4.0] - 2022-11-17

### Update

- Bump `@angular` dependencies to v15.0.0.
- Bump `ng-packagr` dependencies to v15.0.0.
- Bump `typescript` dependencies to v4.8.0.

## [4.3.1] - 2022-09-12

### Added

- `auth` option to config
- `closeOnBeforeunload` option to config

### Fixed

- Name function `fromEventOnce` to `fromOneTimeEvent`

## [4.3.0] - 2022-06-28

### Update

- Bump `@angular` dependencies to v14.0.0.
- Bump `socket.io` dependencies to v4.5.1.
- Bump `socket.io-client` dependencies to v4.5.1.

## [4.2.0] - 2021-10-22

### Update

- Bump `@angular` dependencies to v13.0.0.

### Fixed

- Property `withCredentials` is missing in type.

## [4.1.0] - 2021-6-29

### Added

- Husky

### Update

- Bump `@angular` dependencies to v12.0.0.

## [4.0.0] - 2021-3-29

### Update

- Bump `socket.io` dependencies to v4.0.0.
- Bump `socket.io-client` dependencies to v4.0.0.

## [3.3.1] - 2021-3-29

### Change

- Downgrade `socket.io` dependencies to v2.2.0.
- Downgrade `socket.io-client` dependencies to v2.2.0.

## [3.3.0] - 2021-3-12

### Updated

- Bump `Angular` dependencies to version 11.
- Bump `socket.io` dependencies to v4.0.0.
- Bump `socket.io-client` dependencies to v4.0.0.

## [3.2.0] - 2020-06-26

### Updated

- `Angular` dependencies to version 10.

### Changed

`emit()` to accept any numbers of args.

## [3.1.0] - 2020-06-26

### Updated

- `Angular` dependencies to version 9.

### Fixed

- tslint warnings.

## [3.0.0] - 2019-08-10

### Updated

- `Angular` dependencies to version 8.

### Changed

- Pack library to `ng-packagr` from `ngc-rollup`.

### Fixed

- Errors at packing the library.

### Removed

- `rxjs` from dependencies.
- `@Inject(SOCKET_CONFIG_TOKEN)` form service constructor, casuing erros with `Angular 8`.

## [2.1.1] - 2018-11-28

### Added

- Function to create custom namespaces.

### Changed

- Angular peer dependencie to `^6.0.0 || ^7.0.0` to resolve npm warnings.

### Removed

- Steps to run proyect in Anuglar 6 with version 1.0.8.

## [2.0.0] - 2018-10-26

### Removed

- Angular core from dependencies to work on Angular 7.
