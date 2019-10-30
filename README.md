# Gaia-SDK

The gaia-sdk project is used to establish a connection from a client implementation to the GAIA backend services.

At the moment the following programming languages are supported:

* java (gaia-sdk-java)
* javascript (gaia-sdk-javascript)
* python (gaia-sdk-python) (in progress)

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
