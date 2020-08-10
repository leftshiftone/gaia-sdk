from uuid import UUID
Uuid = str
class VariableRegistry:

    def __init__(self):
        self.variables = dict()
        self.datatypes = []
        self.counters = dict()

    def register(self, name: str, value):
        if value == None:
            return "null"

        if name not in self.counters:
            self.counters[name] = 0
        self.counters[name] = self.counters[name] + 1
        varName = name + str(self.counters[name])

        self.variables[varName] = self.to_value(value)
        self.datatypes.append("$" + varName + ":" + self.toType(value))

        return "$" + varName

    def getVariables(self):
        return self.variables

    def getDatatypes(self):
        return self.datatypes

    def toType(self, obj) -> str:
        if isinstance(obj, list):
            return "[" + str(self.toType(obj[0])) + "]"
        if (type(obj) is str):
            return self.resolveString(obj)
        if (type(obj) is int):
            return "Int"
        if (type(obj) is float):
            return "float"
        if (type(obj) is bool):
            return "Boolean"
        else:
            return type(obj).__name__

    def resolveString(self, obj):
        if (self.isUUID(obj)):
            return "Uuid"
        else:
            return "String"

    def isUUID(self, obj):
        try:
            UUID(obj, version=4)
            return True
        except ValueError:
            return False

    def to_value(self, obj):
        if isinstance(obj, list):
            return list(map(lambda x: self.to_value(x), obj))

        if (type(obj) is str):
            return obj
        if (type(obj) is int):
            return obj
        if (type(obj) is float):
            return obj
        if (type(obj) is bool):
            return obj
        else:
            return obj.__dict__
