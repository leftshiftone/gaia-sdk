export enum ConversationQueueType {
    INTERACTION = "INTERACTION",
    NOTIFICATION= "NOTIFICATION",
    CONTEXT = "CONTEXT",
    LOGGING = "LOGGING"
}

export namespace ConversationQueueType {
    export function getFromTopic(topic: string): ConversationQueueType {
        const split = topic.split("/")
        return ConversationQueueType[split[split.length - 1].toUpperCase()]
    }
}

