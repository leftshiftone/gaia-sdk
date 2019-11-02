class VariableRegistry:

    def __init__(self):
        self.variables = dict()
        self.datatypes = []
        self.counters = dict()

    def register(self, name:str, value):
        if name not in self.counters:
            self.counters[name] = 0
        self.counters[name] = self.counters[name] + 1
        varName = name + str(self.counters[name])

        self.variables[varName] = value
        self.datatypes.append("$" + varName + ":" + self.toType(value))

        return varName

    def getVariables(self):
        return self.variables

    def getDatatypes(self):
        return self.datatypes

    def toType(self, obj) -> str:
        if (type(obj) is str):
            return "str"
        if (type(obj) is int):
            return "int"
        if (type(obj) is float):
            return "float"
        if (type(obj) is bool):
            return "bool"
        else:
            return type(obj)
