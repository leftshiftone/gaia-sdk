/**
 * @jest-environment node
 */
import {Gaia} from "../Gaia";
import {HMACCredentials, JWTCredentials} from "..";
import {TBLCredentials} from "../api/GaiaCredentials";
const fs = require('fs');

describe("dataref tests:", () => {

    test('test write new file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const buffer = new Buffer(2);
        buffer[0] = 66;
        buffer[1] = 66;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("newFile", buffer);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        })
    });

    test('test overwrite existing file does not work', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const buffer = new Buffer(2);
        buffer[0] = 66;
        buffer[1] = 66;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", buffer);
            observable.subscribe(e => {
                resolve(e || "");
            }, reject);
        })
    });

    test('test load file as file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").asFile();
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        });
    });

    test('test overwrite file with override', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const buffer = new Buffer(2);
        buffer[0] = 65;
        buffer[1] = 65;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", buffer, true);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        });
    });

    test('test list files in existing directory', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant1/existingDirectory").list();
            observable.subscribe(e => {
                expect(e).toEqual([{tenant: "tenant", filePath: "existingDirectory/file1"}]);
                resolve(e || "");
            }, reject);
        });
    });

    test('test list files in nonexistent directory', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@ten123ant/nonexistentDirectory").list();
            observable.subscribe(e => {
                expect(e).toEqual([]);
                resolve(e || "");
            }, reject);
        });
    });

    test('test remove existing file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/existingFile").remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(true);
                resolve(e || "");
            }, reject);
        });
    });

    test('test remove nonexistent file', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/nonexistentFile").remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(false);
                resolve(e || "");
            }, reject);
        });
    });

    test('test login', () => {
        let credentials = {
            "username": "mockUser",
            "password": "mockPassword"
        }

        return new Promise((resolve, reject) => {
            Gaia.login('http://localhost:8080/api/auth/access', credentials).then((data) => {
                console.log(data);
                resolve("");
            })
        });
    });
});
