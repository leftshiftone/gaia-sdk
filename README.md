# GAIA-SDK

[![CircleCI branch](https://img.shields.io/circleci/project/github/leftshiftone/gaia-sdk/master.svg?style=flat-square)](https://circleci.com/gh/leftshiftone/gaia-sdk)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/leftshiftone/gaia-sdk.svg?style=flat-square)](https://github.com/leftshiftone/gaia-sdk/tags)

[![Bintray](https://img.shields.io/badge/dynamic/json.svg?label=bintray&query=name&style=flat-square&url=https%3A%2F%2Fapi.bintray.com%2Fpackages%2Fleftshiftone%2Fgaia-sdk%2Fone.leftshift.gaia-sdk.gaia-sdk-api%2Fversions%2F_latest)](https://bintray.com/leftshiftone/gaia-sdk/one.leftshift.gaia-sdk.gaia-sdk-api/_latestVersion)
[![npm (scoped)](https://img.shields.io/npm/v/@leftshiftone/gaia-sdk?style=flat-square)](https://www.npmjs.com/package/@leftshiftone/gaia-sdk)
[![PyPI](https://img.shields.io/pypi/v/gaia-sdk?style=flat-square)](https://pypi.org/project/gaia-sdk/)


Please see project `gaia-sdk-docs` for the documentation.


## Development

### Generate source
Run `./gradlew generateSource`.

### Release
Releases are triggered locally. Just a tag will be pushed and CI takes care of the rest.

#### Major
Run `./gradlew final -x bintrayUpload -Prelease.scope=major` locally.

#### Minor
Run `./gradlew final -x bintrayUpload -Prelease.scope=minor` locally.

#### Patch
Must be released from branch (e.g. `release/1.0.x`)

Run `./gradlew final -x bintrayUpload -Prelease.scope=patch` locally.
