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
}

export class QueueOptions implements mqtt.IClientOptions, IQueueOptions {
    public host: string;
    public port: number;
    public clientThreads: number;
    public username?: string;
    public password?: string;
    public deviceId: string;
    public deviceInstanceId: string;
    public subscribeTimeout: number;

    constructor(host: string,
                port: number,
                username?: string,
                password?: string,
                clientThreads: number = 1,
                deviceId = UUID.randomUUID().toString(),
                deviceInstanceId = UUID.randomUUID().toString(),
                subscribeTimeout: number = 10) {
        this.host = host;
        this.port = port;
        this.clientThreads = clientThreads;
        this.username = username;
        this.password = password;
        this.deviceId = deviceId;
        this.deviceInstanceId = deviceInstanceId;
        this.subscribeTimeout = subscribeTimeout
    }

}
