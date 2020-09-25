import {UUID} from "../graphql/GaiaScalars";
import * as mqtt from "mqtt"

export interface IQueueOptions {
    host: string
    port: number
    clientThreads: number
    username?: string
    password?: string
    deviceId: string
    deviceInstanceId: string
    subscribeTimeout: number
    protocolVersion: number
    userId: string
}

export class QueueOptions implements IQueueOptions, mqtt.IClientOptions {
    public host: string;
    public port: number;
    public clientId: string;
    public clientThreads: number;
    public username?: string;
    public password?: string;
    public deviceId: string;
    public deviceInstanceId: string;
    public subscribeTimeout: number;
    public protocolVersion: number = 5;
    public userId: string

    constructor(host: string,
                port: number,
                username?: string,
                password?: string,
                deviceId: string = UUID.randomUUID().toString(),
                deviceInstanceId: string = UUID.randomUUID().toString(),
                clientThreads: number = 1,
                subscribeTimeout: number = 10) {
        this.host = host;
        this.port = port;
        this.clientId = deviceInstanceId; // used by the underlying mqtt library
        this.clientThreads = clientThreads;
        this.username = username;
        this.password = password;
        this.subscribeTimeout = subscribeTimeout
        this.deviceId = deviceId;
        this.deviceInstanceId = deviceInstanceId;
        this.userId = UUID.randomUUID().toString()
    }

}
