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
                clientThreads: number = 1,
                subscribeTimeout: number = 10) {
        this.host = host;
        this.port = port;
        this.clientThreads = clientThreads;
        this.username = username;
        this.password = password;
        this.subscribeTimeout = subscribeTimeout
        this.deviceId = UUID.randomUUID().toString();
        this.deviceInstanceId = UUID.randomUUID().toString();
        this.userId = UUID.randomUUID().toString()
    }

}
