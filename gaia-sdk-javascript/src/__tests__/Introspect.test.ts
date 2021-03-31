import {Mock} from '../mock/mock';
import {CancelSkillBuildJobImpulse, CreateSkillBuildJobImpulse} from '../graphql';

describe("Introspection Suite", () => {

    test("get jobs smoke", () => {
        return new Promise((resolve, reject) => {
            const gaiaRef = Mock.gaiaRef(() => JSON.stringify( {
                                                                   "data": {
                                                                       "introspect": {
                                                                           "buildJobs": [
                                                                               {
                                                                                   "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                                                                   "name": "skill-omdb-v0.1.3-build",
                                                                                   "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                                                                   "tag": "v0.1.3",
                                                                                   "status": {
                                                                                       "failures": [],
                                                                                       "running": 1,
                                                                                       "pending": 0,
                                                                                       "health": "BUILDING"
                                                                                   }
                                                                               }
                                                                           ]
                                                                       }
                                                                   }
                                                               })
            );
            gaiaRef.introspectBuildJobs("f000f000-f000-f000-f000-f000f000f000")
                .subscribe(n => {
                    //@ts-ignore
                    expect(n.tag).toEqual("v0.1.3")
                    resolve()
                }, err => reject(err))
        });
    });
});
