/**
 * @jest-environment node
 */
import {Gaia} from "../graphql";
import {HMACCredentials, JWTCredentials} from "../api/GaiaCredentials";

describe("dataref tests:", () => {

    test('test write new file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const buffer = new Buffer(2);
        buffer[0] = 66;
        buffer[1] = 66;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("somefile123.zip", buffer);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        })
    }, 999999999);

    test('test overwrite file with override', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const buffer = new Buffer(2);
        buffer[0] = 65;
        buffer[1] = 65;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("somefile1.zip", buffer, true);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        });
    }, 999999999);
});
