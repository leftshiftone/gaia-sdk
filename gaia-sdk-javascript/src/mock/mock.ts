import {
    ClientOptions,
    GaiaClient,
    GaiaCredentials,
    HMACCredentials,
    GaiaClientBuilder,
    ITransporter, GaiaRef
} from '../index';
import {Gaia} from '../Gaia';

import {GaiaClientFactory} from '../graphql/GaiaClientFactory';
import {GaiaStreamClientBuilder, GaiaStreamClientFactory} from '../graphql/GaiaStreamClientBuilder';
import {IStreamTransporter} from '../api/IStreamTransporter';
import {GaiaStreamClient} from '../graphql/GaiaStreamClient';

export class Mock {
    static gaiaRef(mockResponseHandler: (request: MockRequest) => void) {
        const mockClientFactory = new MockClientFactory();
        mockClientFactory.setMockResponseHandler(mockResponseHandler);

        const mockStreamClientFactory = new MockStreamClientFactory();
        mockStreamClientFactory.setMockResponseHandler(mockResponseHandler);

        Gaia.clientFactory = mockClientFactory;
        Gaia.streamClientFactory = mockStreamClientFactory;

        return Gaia.connect('url', new HMACCredentials('mockedApiKey', 'mockedApiSecret'));
    }
}

export class MockStreamClientFactory implements GaiaStreamClientFactory {
    mockResponseHandler: (request: MockRequest) => any = () => {};

    http() {
        const streamClientBuilder = new MockStreamClientBuilder();
        streamClientBuilder.setMockResponseHandler(this.mockResponseHandler);
        return streamClientBuilder;
    }

    setMockResponseHandler(mockResponseHandler: (request: MockRequest) => any) {
        this.mockResponseHandler = mockResponseHandler;
    }
}

export class MockClientFactory implements GaiaClientFactory {
    mockResponseHandler: (request: MockRequest) => any = () => {};

    http() {
        const clientBuilder = new MockClientBuilder();
        clientBuilder.setMockResponseHandler(this.mockResponseHandler);
        return clientBuilder;
    }

    setMockResponseHandler(mockResponseHandler: (request: MockRequest) => any) {
        this.mockResponseHandler = mockResponseHandler;
    }
}

export class MockStreamClientBuilder extends GaiaStreamClientBuilder {
    mockResponseHandler: (request: MockRequest) => any = () => {};

    constructor(transporter: MockTransporter = new MockTransporter()) {
        super(transporter);
    }

    build(): GaiaStreamClient {
        (this.transporter as MockTransporter).seMockResponseHandler(this.mockResponseHandler);
        this.setMockResponseHandler(this.mockResponseHandler);
        return new GaiaStreamClient(new ClientOptions(this.credentials!), this.transporter);
    }

    setMockResponseHandler(mockResponseHandler: (request: MockRequest) => any) {
        this.mockResponseHandler = mockResponseHandler;
        return this;
    }

    withContentType(contentType: string) {
        this.contentType = contentType;
        return this;
    }

    withCredentials(credentials: GaiaCredentials) {
        this.credentials = credentials;
        return this;
    }
}

export class MockClientBuilder extends GaiaClientBuilder {
    mockResponseHandler: (request: MockRequest) => any = () => {};

    constructor(transporter: MockTransporter = new MockTransporter()) {
        super(transporter);
    }

    build(): GaiaClient {
        (this.transporter as MockTransporter).seMockResponseHandler(this.mockResponseHandler);
        this.setMockResponseHandler(this.mockResponseHandler);
        return new GaiaClient(new ClientOptions(this.credentials!), this.transporter);
    }

    setMockResponseHandler(mockResponseHandler: (request: MockRequest) => any) {
        this.mockResponseHandler = mockResponseHandler;
        return this;
    }

    withContentType(contentType: string) {
        this.contentType = contentType;
        return this;
    }

    withCredentials(credentials: GaiaCredentials) {
        this.credentials = credentials;
        return this;
    }
}

export class MockTransporter implements ITransporter, IStreamTransporter {
    mockResponseHandler: (request: MockRequest) => any = () => {};

    transport<T>(options: ClientOptions, payload: any, urlPostfix?: string): Promise<T> {
        return Promise.resolve<T>(
            this.mockResponseHandler(new MockRequest(options, payload, urlPostfix!))
        );
    }

    seMockResponseHandler(mockResponseHandler: (request: MockRequest) => any) {
        this.mockResponseHandler = mockResponseHandler;
    }

    transportAndRetrieveBinary(options: ClientOptions, body: any, urlPostfix?: string): Promise<Blob> {
        return Promise.resolve<Blob>(
            this.mockResponseHandler(new MockRequest(options, body, urlPostfix!))
        );
    }
}

export class MockRequest {
    options: ClientOptions;
    payload: any;
    urlPostFix: string;

    constructor(options: ClientOptions, payload: any, urlPostFix: string) {
        this.options = options;
        this.payload = payload;
        this.urlPostFix = urlPostFix;
    }
}
