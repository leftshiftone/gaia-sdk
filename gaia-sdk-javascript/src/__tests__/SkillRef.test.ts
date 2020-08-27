import {SkillProvisionStatus, SkillRef} from "../api/SkillRef";
import {Gaia} from "../Gaia";
import {HMACCredentials} from "..";

describe("skillref tests:", () => {

    beforeEach(() => {
        jest.setTimeout(20000);
    })

    test("skillprovision start", () => {
        return new Promise((resolve, reject) => {
            let skillRef: SkillRef = getSkillRef()
            skillRef.start().subscribe(() => {
            }, reject, resolve)
        })
    })

    test("skillprovision stop", () => {
        return new Promise((resolve, reject) => {
            let skillRef: SkillRef = getSkillRef()
            skillRef.stop().subscribe(() => {
            }, reject, resolve)
        })
    })

    test("skillprovision status", () => {
        return new Promise((resolve, reject) => {
            let skillRef: SkillRef = getSkillRef()
            skillRef.status().subscribe((e: SkillProvisionStatus) => {
                expect(e.createdAt).toEqual("01.01.1970")
                expect(e.name).toEqual("mockSkillName")
                expect(e.status).toEqual("mockStatus")
                resolve(e)
            }, reject)
        })
    })

    test("skillprovision logs", () => {
        return new Promise((resolve, reject) => {
            let skillRef: SkillRef = getSkillRef()
            skillRef.logs().subscribe((it: String) => {
                expect(it).toEqual("mock log line 1")
                resolve(it)
            }, reject)
        })
    })
})

function getSkillRef(): SkillRef {
    let gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"))
    return gaiaRef.skill("skillProvision://mockTenant/mockSkillProvisionReference")
}
