/**
 * @jest-environment node
 */
import {Gaia} from "../Gaia";
import {HMACCredentials} from "..";
import Blob from "cross-blob"
import {UsernamePasswordCredentials} from "../api/GaiaCredentials";

describe("dataref tests:", () => {
        test('test write new file', () => {
            const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
            const blob = new Blob(["234"]);

            return new Promise((resolve, reject) => {
                const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("newFile", blob);
                observable.subscribe(e => {
                    expect(e !== null).toBeTruthy();
                    resolve(e || "");
                }, reject);
            })
        });

    test('test overwrite existing file does not work', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const blob = new Blob(["234"]);


        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", blob);
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
        const blob = new Blob(["234"]);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", blob, true);
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
        let credentials = new UsernamePasswordCredentials("user", "password")

        return new Promise((resolve, reject) => {
            Gaia.login('http://localhost:8080', credentials).then((gaiaRef) => {
                expect(gaiaRef !== undefined)
                console.log(gaiaRef);
                resolve(gaiaRef);
            })
        });
    });
});
