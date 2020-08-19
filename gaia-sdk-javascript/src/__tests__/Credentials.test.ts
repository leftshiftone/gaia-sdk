import {ClientOptions, Gaia, JWTCredentials} from "..";
import {HMACCredentials, UsernamePasswordCredentials} from "../api/GaiaCredentials";
import {HMACTokenBuilder} from "../http/HMACTokenBuilder";

describe("Credentials test", () => {
    test('test login', async () => {
        expect.assertions(1)
        let credentials = new UsernamePasswordCredentials("user", "password")
        let gaiaRef = await Gaia.login('http://localhost:8080', credentials)
        expect(gaiaRef).toBeDefined()
    });

    test('build auth string from UsernamePasswordCredentials fails', () => {
        const options = new ClientOptions(new UsernamePasswordCredentials("user", "password"))
        const payloadAsString = "hi"

        expect(() => options.credentials.createAuthHeader(options, payloadAsString)).toThrowError()
    })

    test('build jwt auth string from JWTCredentials', () => {
        const jwtToken = "eYniceToken"
        const options = new ClientOptions(new JWTCredentials(jwtToken))
        const payloadAsString = "hi"

        const token = options.credentials.createAuthHeader(options, payloadAsString)

        expect(token).toEqual("Bearer " + jwtToken)
    })

    test('build hmac auth string from GaiaCredentials', () => {
        const timestamp = 1592924470
        const nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"
        const payloadAsString = "hi"
        const options = new ClientOptions(new HMACCredentials("apiKey", "secret"))

        const token = new HMACTokenBuilder()
            .withPayload(payloadAsString)
            .withNonce(nonce)
            .withTimestamp(timestamp)
            .withClientOptions(options)
            .build()
        expect(token).toEqual("HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24")
    });


});
