import {SkillProvisionStatus, SkillRef} from '../api/SkillRef';
import {Mock} from '../mock/mock';

describe('skillref tests:', () => {

    test('skillprovision start', () => {
        return new Promise((resolve, reject) => {
            const skillRef: SkillRef = getSkillRef('/skill/start');
            skillRef.start().subscribe(() => {
            },                         reject, resolve);
        });
    });

    test('skillprovision stop', () => {
        return new Promise((resolve, reject) => {
            const skillRef: SkillRef = getSkillRef('/skill/stop');
            skillRef.stop().subscribe(() => {
            },                        reject, resolve);
        });
    });

    test('skillprovision status', () => {
        return new Promise((resolve, reject) => {
            const skillRef: SkillRef = getSkillRef('/skill/status', {createdAt: '01.01.1970', name: 'mockSkillName', status: 'mockStatus'});
            skillRef.status().subscribe((e: SkillProvisionStatus) => {
                expect(e.createdAt).toEqual('01.01.1970');
                expect(e.name).toEqual('mockSkillName');
                expect(e.status).toEqual('mockStatus');
                resolve(e);
            },                          reject);
        });
    });

    test('skillprovision logs', () => {
        return new Promise((resolve, reject) => {
            const skillRef: SkillRef = getSkillRef('/skill/logs', {logLines: 'l'});
            skillRef.logs().subscribe((it: String) => {
                expect(it).toEqual('l');
                resolve(it);
            },                        reject);
        });
    });

    test('evaluate', () => {
        return new Promise((resolve, reject) => {
            const ref = getSkillRef('/skill/evaluate', {response: 'xyz'});
            ref.evaluate('abc', {request: 'abc'}).subscribe(next => {
                expect(next).toEqual({response: {response: 'xyz'}});
                resolve();
            }, err => reject(err));
        });
    });
});

function getSkillRef(urlPostFix: string, mockResponse?: any): SkillRef {
    const gaiaRef = Mock.gaiaRef((request) => {
        expect(request.urlPostFix).toEqual(urlPostFix);
        return mockResponse;
    });
    return gaiaRef.skill('skillProvision://mockTenant/mockSkillProvisionReference');
}
