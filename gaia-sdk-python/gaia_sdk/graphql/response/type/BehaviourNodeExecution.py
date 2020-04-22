


class BehaviourNodeExecution:
    def processInstanceId(self) -> Uuid:
        return self.processInstanceId
    def nodeInstanceId(self) -> Uuid:
        return self.nodeInstanceId
    def state(self) -> String:
        return self.state
    def executionGroupId(self) -> Uuid:
        return self.executionGroupId
    def nodeId(self) -> Uuid:
        return self.nodeId
    def processId(self) -> Uuid:
        return self.processId
    def type(self) -> String:
        return self.type
    def transitions(self) -> Struct:
        return self.transitions
    def timestamp(self) -> Long:
        return self.timestamp
    def parentProcessId(self) -> Uuid:
        return self.parentProcessId
