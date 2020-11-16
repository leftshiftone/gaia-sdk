/**
 * @jest-environment node
 */
import {Mock} from '../mock/mock';

describe('dataref tests:', () => {

    test('test export identity', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/identity/source');
                return ['blob'];
            });
            const observable = gaiaRef.identity('identityId').export();
            observable.subscribe(e => {
                expect(e !== null).toBeTruthy();
                expect(e.length).toEqual(1);
                resolve(e || '');
            }, reject);
        });
    });

    test('test import identity', () => {
        return new Promise(async (resolve, reject) => {
            const gaiaRef = Mock.gaiaRef((request) => {
                expect(request.urlPostFix).toEqual('/identity/sink');
                return ['blob'];
            });
            const observable = gaiaRef.identity().import();
            expect(observable === undefined).toBeTruthy();
            resolve('TODO: implement import identity test');
        });
    });
});
