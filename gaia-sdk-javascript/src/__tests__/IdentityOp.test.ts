/**
 * @jest-environment node
 */
import {Mock} from '../mock/mock';

describe('IdentityOp tests:', () => {

    const tenantId = 'tenantId';
    const identityId = '1234-5678-9012';
    const identityName = 'identityName';

    test('test export identity', () => {
        return new Promise(async (resolve, reject) => {
            const Blob = require('cross-blob');
            const obj = {hello: 'world'};
            const blob = new Blob([JSON.stringify(obj, null, 2)], {type: 'application/json'});

            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/identity/source');
                return [blob];
            });

            const observable = gaiaRef.identity().export(identityId);
            observable.subscribe((e) => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                expect(e[0] === blob).toBeTruthy();
                resolve(e || '');
            }, reject);
        });
    });

    const importRequestUrlPostfixes = ['/data/sink/init', '/data/sink/chunk', '/data/sink/complete', '/identity/import'];

    test('test import identity', () => {
        // FIXME empty Blob -> cross-blob always empty???
        return new Promise(async (resolve, reject) => {
            const Blob = require('cross-blob');
            const identityBlob = new Blob(['identity data'], {type: 'application/zip'});

            const gaiaRef = Mock.gaiaRef((request) => {
                expect(importRequestUrlPostfixes).toContain(request.urlPostFix);
                return {
                    uploadId: 'A123',
                    chunkId: 'B123',
                    partitionKey: identityId,
                    uri: `gaia://${tenantId}/${identityId}`
                };
            });

            const observable = gaiaRef.identity().import(tenantId, identityName, identityBlob, true);

            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.partitionKey).toEqual(identityId);
                resolve(e || '');
            }, reject);
        });
    });
});
