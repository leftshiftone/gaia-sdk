/**
 * @jest-environment node
 */
import {Mock} from '../mock/mock';

describe('dataref tests:', () => {

    test('test export identity', () => {
        return new Promise(async (resolve, reject) => {
            const Blob = require("cross-blob");
            const obj = {hello: 'world'};
            const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/identity/source');
                return [blob];
            });

            const observable = gaiaRef.identity().export('identityId');
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                expect(e[0] === blob).toBeTruthy();
                resolve(e || '');
            }, reject);
        });
    });

    test.skip('test import identity', () => {
        // FIXME empty Blob -> cross-blob always empty???
        return new Promise(async (resolve, reject) => {
            const Blob = require("cross-blob");
            const obj = {
                name: 'identity-new.zip'
            };
            const identityBlob = new Blob([JSON.stringify(obj)], {type : 'application/zip'});

            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/identity/sink');
                return [identityBlob];
            });

            const observable = gaiaRef.identity().import('tenantId','identityName',
                identityBlob, true);

            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                expect(e[0] === identityBlob).toBeTruthy();
                resolve(e || '');
            }, reject);
        });
    });
});
