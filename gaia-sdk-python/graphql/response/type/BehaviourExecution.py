


class BehaviourExecution:
    def processInstanceId(self) -> Uuid:
        return self.processInstanceId
    def state(self) -> String:
        return self.state
    def timestamp(self) -> Long:
        return self.timestamp
    def duration(self) -> Long:
        return self.duration
    def startEventType(self) -> String:
        return self.startEventType
    def startEventId(self) -> Uuid:
        return self.startEventId
    def initAttributes(self) -> Struct:
        return self.initAttributes
    def processId(self) -> Uuid:
        return self.processId
    def parentProcessId(self) -> Uuid:
        return self.parentProcessId
