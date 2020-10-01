import {MqttSensorQueue, QueueHeader, QueueOptions} from "..";

describe.skip("MqttSensorQueue Test", () => {

    beforeEach(() => {
        jest.setTimeout(10000);
    })

    it("connect", () => {
        const header = new QueueHeader("4a87c137-3894-4580-ae20-8a4f621b75fd", "niceChannel")
        const mqttSensorQueue = new MqttSensorQueue(new QueueOptions("wss://mqtt.beta.gaia.leftshift.one/mqtt", 443, "heimdall"))
        mqttSensorQueue.publishConvInteraction(header, {type: "reception", payload: "", attributes: {}})
    })
})

