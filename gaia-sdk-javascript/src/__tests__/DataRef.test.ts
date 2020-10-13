/**
 * @jest-environment node
 */
import {Gaia, GaiaRef} from "../Gaia";
import {HMACCredentials, UsernamePasswordCredentials} from "..";
import Blob from "cross-blob"

describe("dataref tests:", () => {

    beforeEach(() => {
        jest.setTimeout(10000);
    })

    test('test http error code raises exception', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Gaia.connect("https://neuron.beta.gaia.leftshift.one,", new HMACCredentials("incorrectApiKey", "incorrectApiSecret"))
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").asFile();
            observable.subscribe(reject, error => resolve(error));
        });

    })

    test('test write new file', () => {
        const blob = new Blob(["234"]);

        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("newFile", blob);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                // @ts-ignore
                expect(e.uri).toEqual("gaia://usr@tenant/somefolder/newFile");
                resolve(e || "");
            }, reject);
        })
    });

    test('test overwrite existing file does not work', () => {
        const blob = new Blob(["234"]);
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", blob);
            observable.subscribe(reject, error => resolve(error));
        })
    });

    test('test load file as file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/somefolder/asdf1.pdf").asFile();
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.size).toEqual(11);
                resolve(e || "");
            }, reject);
        });
    });

    test('test overwrite file with override', () => {
        const blob = new Blob(["234"]);
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder").add("existingFile", blob, true);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || "");
            }, reject);
        });
    });

    test('test list files in existing directory', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant1/existingDirectory").list();
            observable.subscribe(e => {
                expect(e).toEqual([{tenant: "tenant", filePath: "existingDirectory/file1"}]);
                resolve(e || "");
            }, reject);
        });
    });

    test('test list files in nonexistent directory', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@ten123ant/nonexistentDirectory").list();
            observable.subscribe(e => {
                expect(e).toEqual([]);
                resolve(e || "");
            }, reject);
        });
    });

    test('test remove existing file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/existingFile").remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(true);
                resolve(e || "");
            }, reject);
        });
    });

    test('test remove nonexistent file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = await getGaiaRef()
            const observable = gaiaRef.data("gaia://usr@tenant/somefolder/nonexistentFile").remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(false);
                resolve(e || "");
            }, reject);
        });
    });
});

function getGaiaRef() : Promise<GaiaRef> {
    return Promise.resolve(Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret")));
}
