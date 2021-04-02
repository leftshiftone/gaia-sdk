import {Mock} from '../mock/mock';
import {CancelSkillBuildJobImpulse, CreateSkillBuildJobImpulse} from '../graphql';


describe("Practice Suite", () => {

    test("build smoke", () => {
        const gaiaRef = Mock.gaiaRef(() => JSON.stringify({
                                                              "data": {
                                                                  "practice": {
                                                                      "build": {
                                                                          "id": "e2b92d76-b9ac-4626-8a97-fc25f0b79160",
                                                                          "data": {
                                                                              "name": "skill-omdb-v0.1.3-build",
                                                                              "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                                                              "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                                                              "skillRef": "a244d3d9-10fb-453a-8f9c-bb7e5e52a619",
                                                                              "tag": "v0.1.3"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          })
        );
        return new Promise((resolve, reject) => {
            gaiaRef.practiceBuild(new CreateSkillBuildJobImpulse("f000f000-f000-f000-f000-f000f000f000", "a244d3d9-10fb-453a-8f9c-bb7e5e52a619", "v0.1.3"))
                .subscribe(n => {
                    expect(n).not.toBeUndefined();
                    expect(n.data).not.toBeUndefined();
                    //@ts-ignore
                    expect(n.data.tag).toEqual("v0.1.3");
                    resolve();
                }, err => reject(err));
        });
    });


    test("cancel smoke", () => {
        const gaiaRef = Mock.gaiaRef(() => JSON.stringify(    {
                                                                  "data": {
                                                                      "practice": {
                                                                          "cancel": {
                                                                              "id": "a8181dcd-84f5-45a0-ae77-cb0f89e3d7c2",
                                                                              "data": {
                                                                                  "name": "skill-omdb-v0.1.3-build",
                                                                                  "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                                                                  "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                                                                  "tag": "v0.1.3"
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              })
        );
        return new Promise((resolve, reject) => {
            gaiaRef.practiceCancel(new CancelSkillBuildJobImpulse("f000f000-f000-f000-f000-f000f000f000", "47de74f7-3dd3-34ca-9b92-3690a2f8cc91"))
                .subscribe(n => {
                    expect(n).not.toBeUndefined();
                    expect(n.data).not.toBeUndefined();
                    //@ts-ignore
                    expect(n.data.tag).toEqual("v0.1.3");
                    resolve();
                }, err => reject(err));
        });
    });
});
