/**
 * @jest-environment node
 */
import {Gaia} from '../Gaia';
import {HMACCredentials} from '..';
import {Mock} from '../mock/mock';

describe('dataref tests:', () => {

    test('test http error code raises exception', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Gaia.connect('https://neuron.beta.gaia.leftshift.one,', new HMACCredentials('incorrectApiKey', 'incorrectApiSecret'));
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder/somefolder/asdf1.pdf').asFile();
            observable.subscribe(reject, error => resolve(error));
        });

    });

    test.skip('test write new file', () => {
        // FIXME ReferenceError Blob -> when running with nodejs
        const blob = new Blob(['234']);

        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/sink/init');
                return {uploadId: 'A123', chunkId: 'B123'};
            });
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder').add('newFile', blob);
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                // @ts-ignore
                expect(e.uri).toEqual('gaia://usr@tenant/somefolder/newFile');
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
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder').add('existingFile', blob);
            observable.subscribe(reject, error => resolve(error));
        });
    });

    test('test load file as file', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/source');
                return ['a'];
            });
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder/somefolder/asdf1.pdf').asFile();
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                resolve(e || '');
            },                   reject);
        });
    });

    test.skip('test overwrite file with override', () => {
        // FIXME ReferenceError Blob -> when running with nodejs
        const blob = new Blob(['234']);
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/data/sink/init');
                return {uploadId: 'A123'};
            });
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder').add('existingFile', blob, true);
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
            const observable = gaiaRef.data('gaia://usr@tenant1/existingDirectory').list();
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
            const observable = gaiaRef.data('gaia://usr@ten123ant/nonexistentDirectory').list();
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
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder/existingFile').remove();
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
            const observable = gaiaRef.data('gaia://usr@tenant/somefolder/nonexistentFile').remove();
            observable.subscribe(e => {
                expect(e.fileExisted).toEqual(false);
                resolve(e || '');
            },                   reject);
        });
    });
});
