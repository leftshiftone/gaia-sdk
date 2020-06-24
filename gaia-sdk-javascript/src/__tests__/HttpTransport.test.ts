import {ClientOptions, HttpTransport} from "..";
import {HMacCredentials} from "../api/GaiaCredentials";

describe("HttpTransport Test:", () => {


    test('build hmac token from GaiaCredentials', () => {
        const timestamp = 1592924470
        const nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"
        const payloadAsString = "hi"
        const options = new ClientOptions(new HMacCredentials("apiKey", "secret"))
        const token = HttpTransport.buildHmacToken(options, payloadAsString, timestamp, nonce)
         expect(token==="HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24").toBeTruthy()
        });


});
