import {RainRequest} from "../../../all";
import {
    CompleteUploadImpulse,
    HazeArtifact,
    InitiateUploadImpulse,
    RainMutationRequest,
    RainQueryRequest,
    TransferChunkImpulse
} from "../RainRequest";

describe("RainRequestTest", () => {


    test('builds expected queries', () => {
        const request = RainRequest.query((it: RainQueryRequest) => {
            it.skills("1234", qs => {
                qs.status("test", it => {
                    it.name();
                    it.created();
                    it.status();
                })
            });
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('query rain($tenantId1:String!, $skillName1:String!) { skills(tenantId:$tenantId1) { status(skillName:$skillName1) { name created status } } }');
        expect(variables).toEqual({"skillName1": "test", "tenantId1": "1234"});
    });


    test('builds expected queries for artifacts InitiateUploadImpulse', () => {
        const impulse = new InitiateUploadImpulse();
        impulse.fileName = "test.zip";
        const request = RainRequest.mutation((it: RainMutationRequest) => {
            it.artifacts("1234", it => {
                it.initiateUpload(impulse, it => {
                    it.transportId();
                    it.key();
                })
            })
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('mutation rain($tenantId1:String!, $impulse1:InitiateUploadImpulse!) { artifacts(tenantId:$tenantId1) { initiateUpload(impulse:$impulse1) { transportId key } } }');
        expect(variables).toEqual({"impulse1": {"fileName": "test.zip"}, "tenantId1": "1234"});
    });

    test('builds expected queries for artifacts TransferChunk', () => {
        const impulse = new TransferChunkImpulse();
        impulse.partNumber = 0;
        impulse.partSize = 1000;
        impulse.encodedBytes = "abc";
        impulse.transportId = "12345";
        const request = RainRequest.mutation((it: RainMutationRequest) => {
            it.artifacts("1234", it => {
                it.transferChunk(impulse, it => {
                    it.key();
                    it.transportId();
                    it.partNumber();
                    it.etag();
                })
            })
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('mutation rain($tenantId1:String!, $impulse1:TransferChunkImpulse!) { artifacts(tenantId:$tenantId1) { transferChunk(impulse:$impulse1) { key transportId partNumber etag } } }');
        expect(variables).toEqual({
            "impulse1": {
                "partNumber": 0,
                "partSize": 1000,
                "encodedBytes": "abc",
                "transportId": "12345"
            }, "tenantId1": "1234"
        });
    });

    test('builds expected queries for artifacts CompleteUpload', () => {
        const impulse = new CompleteUploadImpulse();
        impulse.etags = [{"partNumber": 0, "etag": "hello"} as Map<string, any>, {
            "partNumber": 1,
            "etag": "world"
        } as Map<string, any>]; //TODO: don't use maps eventually
        impulse.key = "abc";
        impulse.transportId = "12345";

        const artifact = new HazeArtifact();

        artifact.qualifier = "keios-test";
        artifact.appendent = "tis is but a test";
        artifact.labelList = ["a", "b", "c"];

        const request = RainRequest.mutation((it: RainMutationRequest) => {
            it.artifacts("1234", it => {
                it.completeUpload(impulse, artifact, it => {
                    it.location();
                    it.key();
                    it.etag();
                })
            })
        });

        const [statement, variables] = request.getStatement();
        expect(statement).toEqual('mutation rain($tenantId1:String!, $impulse1:CompleteUploadImpulse!, $artifact1:HazeArtifact!) { artifacts(tenantId:$tenantId1) { completeUpload(impulse:$impulse1, artifact:$artifact1) { location key etag } } }');
        expect(variables).toEqual({
            "artifact1": {
                "appendent": "tis is but a test",
                "labelList": [
                    "a",
                    "b",
                    "c",
                ],
                "qualifier": "keios-test",
            },
            "impulse1": {
                "etags": [
                    {
                        "partNumber": 0, "etag": "hello"
                    },
                    {
                        "partNumber": 1, "etag": "world",
                    }
                ],
                "key" : "abc",
                "transportId": "12345"
            },
            "tenantId1": "1234"
        });
    });

    //mutation rain($tenantId1: String!, $impulse1: CompleteUploadImpulse!, $artifact1: HazeArtifact!) { artifacts(tenantId:$tenantId1) { completeUpload(impulse:$impulse1, artifact:$artifact1) { location key etag } } }
});
