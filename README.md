# GAIA-SDK

[![CircleCI branch](https://img.shields.io/circleci/project/github/leftshiftone/gaia-sdk/master.svg?style=flat-square)](https://circleci.com/gh/leftshiftone/gaia-sdk)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/leftshiftone/gaia-sdk.svg?style=flat-square)](https://github.com/leftshiftone/gaia-sdk/tags)

[![Maven Central](https://img.shields.io/maven-central/v/one.leftshift.gaia-sdk/gaia-sdk?style=flat-square)](https://mvnrepository.com/artifact/one.leftshift.gaia-sdk/gaia-sdk)
[![npm (scoped)](https://img.shields.io/npm/v/@leftshiftone/gaia-sdk?style=flat-square)](https://www.npmjs.com/package/@leftshiftone/gaia-sdk)
[![PyPI](https://img.shields.io/pypi/v/gaia-sdk?style=flat-square)](https://pypi.org/project/gaia-sdk/)


Please see project `gaia-sdk-docs` for the documentation.


## Development

### Generate source
Run `./gradlew generateSource`.

### Release
Releases are triggered locally. Just a tag will be pushed and CI takes care of the rest.

#### Major
Run `./gradlew final -Prelease.scope=major` locally.

#### Minor
Run `./gradlew final -Prelease.scope=minor` locally.

#### Patch
Must be released from branch (e.g. `release/1.0.x`)

Run `./gradlew final -Prelease.scope=patch` locally.

#### Release Candidate
Set the release scope by replacing `$scope` with the version of the release candidate (major, minor, patch).

Run `./gradlew candidate -x test -Prelease.scope=$scope -x sendReleaseEmail`  locally.
