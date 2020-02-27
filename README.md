# GAIA-SDK

[![CircleCI branch](https://img.shields.io/circleci/project/github/leftshiftone/gaia-sdk/master.svg?style=flat-square)](https://circleci.com/gh/leftshiftone/gaia-sdk)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/leftshiftone/gaia-sdk.svg?style=flat-square)](https://github.com/leftshiftone/gaia-sdk/tags)

The gaia-sdk project is used to establish a connection from a client implementation to the GAIA backend services.

At the moment the following programming languages are supported:

* java (gaia-sdk-java)
* javascript (gaia-sdk-javascript)
* python (gaia-sdk-python)

## Why to use
* Ease of integration - The SDK takes care of all request preparation steps.
* Full reactive - The SDK is fully reactive and so designed for high performance.

## How to use
In order to use the SDK a client object have to be instantiated. Therefore you can use a ClientBuilder to create
a Client instance. Each GAIA service has its own implementations. The following example uses the ATLAS classes.

```
val client = AtlasClientBuilder.http("https://url-to-gaia").withApiKey("apikey").withSecret("secret").build()
```

At next a request instance have to be instantiated. A request object can either represent a query, mutation or subscription request.

```
val request = AtlasRequest.query {
            nlu("a sample text") {
                lex {
                    lemma()
                    pos()
                    base()
                    abbreviations { lemma() }
                    labels()
                    parts { lemma() }
                    causations { lemma() }
                    hyperonyms { lemma() }
                    meronyms { lemma() }
                    flexions { lemma() }
                    synonyms { lemma() }
                }
            }
        }
```

To invoke the request simply calling the appropriate client method.

```
val response = client.query(request)
```

## Development

### Generate source
Run `./gradlew generateSource`.

### Release
Releases are triggered locally. Just a tag will be pushed and CI takes care of the rest.

#### Major
Run `./gradlew triggerRelease -Pscope=major` locally.

#### Minor
Run `./gradlew triggerRelease -Pscope=minor` locally.

#### Patch
Run `./gradlew triggerRelease -Pscope=patch` locally.
