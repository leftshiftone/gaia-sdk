import {GaiaClient, GaiaClientBuilder} from '..';
import {GaiaCredentials} from '..';
import {DataRef} from '../api/DataRef';
import {SkillRef} from '../api/SkillRef';
import {GaiaStreamClient} from '../graphql/GaiaStreamClient';
import {GaiaStreamClientFactory} from '../graphql/GaiaStreamClientBuilder';
import {ISensorStream} from '../api/ISensorStream';
import {IdentityRef} from "../api/IdentityRef";

export class HttpSensorStream implements ISensorStream{
    private readonly client: GaiaStreamClient;

    constructor(url: string, credentials: GaiaCredentials, gaiaStreamClientFactory: GaiaStreamClientFactory) {
        this.client = gaiaStreamClientFactory.http(url + '/api')
            .withCredentials(credentials)
            .build();
    }

    data(uri: string): DataRef {
        console.log('Create DataRef');
        return new DataRef(uri, this.client);
    }

    skill(skillUri: string) {
        return new SkillRef(skillUri, this.client);
    }

    identity(uri: string): IdentityRef {
        return new IdentityRef(uri, this.client);
    }
}
