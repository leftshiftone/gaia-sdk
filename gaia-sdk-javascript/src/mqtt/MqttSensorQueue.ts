import * as mqtt from 'mqtt';
import {IQueueOptions} from './QueueOptions';
import {IQueueHeader} from './QueueHeader';
import {ConversationQueueType} from './ConversationQueueType';
import {UserProperties} from 'mqtt-packet';

export class MqttSensorQueue {

    private readonly options: IQueueOptions;
    private client: mqtt.Client;
    private readonly subscriptions: Map<string, QueueCallback> = new Map();

    constructor(options: IQueueOptions) {
        this.options = options;
        this.client = this.connect();
    }

    public connect = () => mqtt.connect(this.options.host, this.options);

    public on(event: string, callback: any) {
        this.client.on(event, callback);
    }

    public end(force: boolean, callback: any) {
        this.client.end(force, callback);
    }

    public publish(conversationQueueType: ConversationQueueType, header: IQueueHeader, payload: object, attributes: object, type: string) {
        const topic = this.getTopic(conversationQueueType, header);
        console.debug(`Sending message to topic ${topic}`);
        const payloadStr = JSON.stringify({attributes, type, payload: payload instanceof Array ? payload[0] : payload});
        const userProperties = Object.assign(header, {
            deviceInstanceId: this.options.deviceInstanceId,
            deviceId: this.options.deviceId,
            userId: this.options.userId
        });
        const opts: IMqttPublishOpts = {properties: {userProperties: JSON.parse(JSON.stringify(userProperties))}};
        this.client.publish(topic, payloadStr, opts, this.mqttCallback(JSON.parse(payloadStr)));
    }

    public subscribe(type: ConversationQueueType, header: IQueueHeader, callback?: QueueCallback) {
        const topic = this.getTopic(type, header);
        if (topic in this.subscriptions.keys()) {
            console.warn(`${topic} already subscribed`);
            return;
        }
        if (callback) {
            console.debug('subscribe to', topic);
            this.client.subscribe(topic, callback);
            this.subscriptions.set(topic, callback);
        }
    }

    public unsubscribe(topic: string) {
        this.client.unsubscribe(topic);
    }

    public subscribeConvContext = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.CONTEXT, header, callback);
    public subscribeConvNotification = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.NOTIFICATION, header, callback);
    public subscribeConvInteraction = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.INTERACTION, header, callback);
    public subscribeConvLogging = (header: IQueueHeader, callback?: QueueCallback) => this.subscribe(ConversationQueueType.LOGGING, header, callback);


    public publishConvInteraction(header: IQueueHeader, interaction: ConvInteraction) {
        if (this.getTopic(ConversationQueueType.INTERACTION, header) in this.subscriptions.keys()) {
            this.subscribeConvInteraction(header, () => {
            });
        }
        this.publish(ConversationQueueType.INTERACTION, header, interaction.payload, interaction.attributes, interaction.type);
    }

    private mqttCallback(payload: object): mqtt.PacketCallback {
        return (error?: Error, packet?: mqtt.Packet) => {
            error ?
                console.error('Failed to publish message', error, packet) :
                console.debug('Successfully published message', payload);
        };
    }

    public callback = (topic: string, payload: object) => {
        if (this.subscriptions.get(topic)) {
            const callback = this.subscriptions.get(topic);
            callback!(payload);
            return;
        }
        console.warn('no callback for topic ' + topic, payload);
    }

    public getTopic = (type: ConversationQueueType, header: IQueueHeader) =>
        `gaia/conversation/${this.options.deviceInstanceId}/${header.channelId}/${type.toLowerCase()}`

}

export declare type QueueCallback = (message: any) => void;

export interface ConvInteraction {
    payload: object;
    attributes: object;
    type: string;
}

interface IMqttPublishOpts extends mqtt.IClientPublishOptions {
    properties?: {
        payloadFormatIndicator?: boolean,
        messageExpiryInterval?: number,
        topicAlias?: number,
        responseTopic?: string,
        correlationData?: Buffer,
        userProperties?: UserProperties,
        subscriptionIdentifier?: number,
        contentType?: string
    };
}
