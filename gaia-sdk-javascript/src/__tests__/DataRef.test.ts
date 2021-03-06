/**
 * @jest-environment node
 */
import {Gaia} from '../Gaia';
import {HMACCredentials} from '..';
import {Mock} from '../mock/mock';
import CrossBlob from 'cross-blob';
import sleep from "./utils/sleep";

describe('dataref tests:', () => {

    const acceptableRequestUrlPostFixes = ['/data/sink/init', '/data/sink/chunk', '/data/sink/complete'];

    test('test http error code raises exception', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Gaia.connect('https://neuron.beta.gaia.leftshift.one,', new HMACCredentials('incorrectApiKey', 'incorrectApiSecret'));
            const observable = gaiaRef.data('gaia://tenant/somefolder/somefolder/asdf1.pdf').asFile();
            observable.subscribe(reject, error => resolve(error), reject);
        });
    });

    test('test write new file', () => {
        const blob = new CrossBlob(['234']);

        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(acceptableRequestUrlPostFixes).toContain(request.urlPostFix);
                return {uploadId: 'A123', chunkId: 'B123'};
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder').add('newFile', blob);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                // @ts-ignore
                expect(e.uri).toEqual('gaia://tenant/somefolder/newFile');
                resolve(e || '');
            },                   reject);
        });
    });

    test('test overwrite existing file does not work', () => {
        const blob = Buffer.from(['234']);
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/source');
                return {x: 'y'};
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder').add('existingFile', blob);
            observable.subscribe(reject, error => resolve(error));
        });
    });

    test('test load file as file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/source');
                return ['a'];
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder/somefolder/asdf1.pdf').asFile();
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                resolve(e || '');
            },                   reject);
        });
    });

    test('test overwrite file with override', () => {
        const blob = new CrossBlob(['234']);
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(acceptableRequestUrlPostFixes).toContain(request.urlPostFix);
                return {uploadId: 'A123'};
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder').add('existingFile', blob, true);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                resolve(e || '');
            },                   reject);
        });
    });

    test('test list files in existing directory', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {

                expect(request.urlPostFix).toEqual('/data/list');
                return [{tenant: 'tenant', filePath: 'existingDirectory/file1'}];
            });
            const observable = gaiaRef.data('gaia://tenant1/existingDirectory').list();
            observable.subscribe(e => {
                expect(e).toEqual([{tenant: 'tenant', filePath: 'existingDirectory/file1'}]);
                resolve(e || '');
            },                   reject);
        });
    });

    test('test list files in nonexistent directory', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/list');
                return [];
            });
            const observable = gaiaRef.data('gaia://ten123ant/nonexistentDirectory').list();
            observable.subscribe(e => {
                expect(e).toEqual([]);
                resolve(e || '');
            },                   reject);
        });
    });

    test('test remove existing file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/remove');
                return {fileExisted: true};
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder/existingFile').remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(true);
                resolve(e || '');
            },                   reject);
        });
    });

    test('test remove nonexistent file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/remove');
                return {fileExisted: false};
            });
            const observable = gaiaRef.data('gaia://tenant/somefolder/nonexistentFile').remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(false);
                resolve(e || '');
            },                   reject);
        });
    });



    test('test async behaviour of observable (DataRef)', () => {
        return new Promise(async (resolve, reject) => {
            const mock = jest.fn(() => []);
            const gaiaRef = Mock.gaiaRef(mock);
            const observable = gaiaRef.data('gaia://tenant/somefolder/somefolder/asdf1.pdf').asFile();
            await sleep(250);
            expect(mock.mock.calls.length).toBe(0);

            observable.subscribe(() => {
                expect(mock.mock.calls.length).toBe(1);
                resolve();
            }, reject);
        });
    });
});
