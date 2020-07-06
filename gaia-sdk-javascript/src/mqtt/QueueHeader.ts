import {UUID} from "../graphql/GaiaScalars";

export interface IQueueHeader {
    identityId: string
    channelId?: string
}

export class QueueHeader implements IQueueHeader {

    public identityId: string;
    public channelId?: string;

    constructor(identityId: string, channelId: string = UUID.randomUUID().toString()) {
        this.identityId = identityId;
        this.channelId = channelId;
    }

    public static getChannelIdFromTopic(topic: string) {
        const split = topic.split('/')
        return split[split.length - 2]
    }

}
