import * as mqtt from "mqtt"
import {IQueueOptions} from "./QueueOptions"
import {IQueueHeader} from "./QueueHeader";
import {ConversationQueueType} from "./ConversationQueueType";

export class MqttSensorQueue {

    private readonly options: IQueueOptions
    private client: mqtt.Client;
    private readonly subscriptions: Map<string, QueueCallback> = new Map();

    constructor(options: IQueueOptions) {
        this.options = options
        this.client = this.connect()
    }

    public connect = () => mqtt.connect(this.options.host, this.options)

    public on(event: string, callback: any) {
        this.client.on(event, callback)
    }

    public end(force: boolean, callback: any) {
        this.client.end(force, callback)
    }

    public publish(type: ConversationQueueType, header: IQueueHeader, payload: object) {
        const topic = this.getTopic(type, header);
        console.debug(`Sending message to topic ${topic}`);

        const body = payload instanceof Array ? payload[0] : payload;
        this.client.publish(topic, JSON.stringify({body, header}), this.mqttCallback(body));
    }

    public subscribe(type: ConversationQueueType, header: IQueueHeader, callback?: QueueCallback) {
        const topic = this.getTopic(type, header);
        if (topic in this.subscriptions.keys()) {
            console.warn(`${topic} already subscribed`)
            return;
        }
        if(callback) {
            console.log("subscribe", topic, callback)
            this.client.subscribe(topic, callback)
            this.subscriptions.set(topic, callback)
        }
    }

    public unsubscribe(topic: string) {
        this.client.unsubscribe(topic)
    }

    public subscribeConvContext = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.CONTEXT, header, callback)
    public subscribeConvNotification = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.NOTIFICATION, header, callback)
    public subscribeConvInteraction = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.INTERACTION, header, callback)
    public subscribeConvLogging = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.LOGGING, header, callback)


    public publishConvInteraction(header: IQueueHeader, attributes: object) {
        if (this.getTopic(ConversationQueueType.INTERACTION, header) in this.subscriptions.keys()) {
            this.subscribeConvInteraction(header, () => {
            })
        }
        const body = {type: 'reception', attributes}
        this.publish(ConversationQueueType.INTERACTION, header, {body});
    }

    private mqttCallback(body: object): mqtt.PacketCallback {
        return (error?: Error, packet?: mqtt.Packet) => {
            error ?
                console.error(`Failed to publish message`, error, packet) :
                console.debug(`Successfully published message`, body);
        };
    }

    public callback = (topic: string, msg: object) => {
        console.log("callbacks", this.subscriptions)
        this.subscriptions.get(topic) || console.warn(msg);
    }

    private getTopic = (type: ConversationQueueType, header: IQueueHeader) =>
        `GAIA/conversation/${this.options.deviceInstanceId}/${header.channelId}/${type.toLowerCase()}`

}

export declare type QueueCallback = (message: any) => void
