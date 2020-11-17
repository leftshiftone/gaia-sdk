import {GaiaCredentials} from '..';
import {DataRef} from '../api/DataRef';
import {SkillRef} from '../api/SkillRef';
import {GaiaStreamClient} from '../graphql/GaiaStreamClient';
import {GaiaStreamClientFactory} from '../graphql/GaiaStreamClientBuilder';
import {ISensorStream} from '../api/ISensorStream';
import {IdentityOp} from "../api/IdentityOp";

export class HttpSensorStream implements ISensorStream{
    private readonly client: GaiaStreamClient;

    constructor(url: string, credentials: GaiaCredentials, gaiaStreamClientFactory: GaiaStreamClientFactory) {
        this.client = gaiaStreamClientFactory.http(url + '/api')
            .withCredentials(credentials)
            .build();
    }

    data(uri: string): DataRef {
        return new DataRef(uri, this.client);
    }

    skill(skillUri: string) {
        return new SkillRef(skillUri, this.client);
    }

    identity(): IdentityOp {
        return new IdentityOp(this.client)
    }
}
