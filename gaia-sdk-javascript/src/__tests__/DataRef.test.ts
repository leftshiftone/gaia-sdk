/**
 * @jest-environment node
 */
import {Gaia} from "../graphql";
import {HMACCredentials, JWTCredentials} from "../api/GaiaCredentials";
const fs = require('fs');

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

    test('test load file as file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new JWTCredentials(
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIyMTIzMmYyOS03YTU3LTM1YTctODM4OS00YTBlNGE4MDFmYzMiLCJpc3MiOiJsZWZ0c2hpZnQgb25lIiwiZXhwIjoxNTk1ODY0MTA4LCJpYXQiOjE1OTU4MzUzMDgsImp0aSI6Ijg1MjI2MmI1LTI2MjgtNDgzYy1iZmJhLTAzOTRiZTVjMWM3YSJ9.Ca2Cuz7rVmW7euCqBrkYNay9bqjzPjKJi8DWZSUjpJJWitDaSFSRiOwOQ-xVmLeGzZBOyRruI_yySr7zy29EcSPM6aj4XxHQN9pFIarTSZRE4yKpac3QyTFvhmCAQsnzk1pK1tet8vFp4GLgLZhd-n2Ev2PGDG4FguC8H97qaDG2FCneuS6pBQiFg4DD_AWZ2Ql7DET6jfppcT3Q2PAtLhLwDuzbn6S2qGDMdUdYrYR_2wYLXKiI7I_4nmwpyvwMSEOn4ZiC6yj0r_AiIOhhxW0wtzowgqK_J5XSAh-hCbMKIeQh0yfBzoLncq85hVJwsezLI3o_da0GEm_PrYfPi09ZJwDxaaRvqBrXK1y2Svmhp_Cy_bYzx4YKJh0qgGNCfewtLj7g6lJbexz_LZcCKWxccH9HvRyf3E70SQEc2PFjGthCtWi0R44Yz1TBrfkiSt1enBdl_9L0ADJPpwQyyVZqkU3z-zgFLCNXEb4v15ALGwbEkChYNfhmmaCfe6pLoAi7du0idnXBmT3WTWxhbR94uDN3OYmP5GhFDfHR3a-8juvDyCFZUwkrFNianehO_IdiYOSvnsGQ8xoqGL4s3yqeT0QQGCrQ9cE7jAU5cLKKa8aFLKpdCI-RNV5xBvNq3O5A8lZ92MqvKpJBOaPYYdiRPMAtWBtesqqU7K1Iv1M"
        ));

        return new Promise((resolve, reject) => {
            gaiaRef.data('gaia://usr@tenant/somefolder/somefolder/asdf1.pdf').asFile().then((data) => {
/*
                var mini = 1024 * 4;
                var iter = 100;
                var b = new Buffer(mini);
                for (var i = 0; i < iter; i++) {
                    var fd = fs.openSync('/tmp/asdf1.pdf', 'w');
                    var remaining = 0;
                    while (remaining < data.length) {
                        b.write(data, 0, mini);
                        fs.writeSync(fd, b, 0, mini, null);
                        remaining += mini;
                    }
                    fs.closeSync(fd);
                }

                resolve("");
 */
                console.log(data.length);
                console.log(typeof data);
                fs.writeFile("/tmp/asdf1.pdf", data, {encoding: 'ascii'}, function(err) {
                    if(err) {
                        reject();
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                    resolve();
                });
            });
        });
    });

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
