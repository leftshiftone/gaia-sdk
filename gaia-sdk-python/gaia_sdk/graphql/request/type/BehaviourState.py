from gaia_sdk.api.VariableRegistry import VariableRegistry


class BehaviourState(list):

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def behaviour_name(self):
        self.append(lambda x: "behaviourName")

    def number_of_executions(self):
        self.append(lambda x: "numberOfExecutions")

    def running(self):
        self.append(lambda x: "running")

    def success(self):
        self.append(lambda x: "success")

    def waiting(self):
        self.append(lambda x: "waiting")

    def failed(self):
        self.append(lambda x: "failed")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
