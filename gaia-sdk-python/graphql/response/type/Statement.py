


class Statement:
    """
    this type represents the statement information
    """
    """
    The statement id
    """
    def identityId(self) -> Uuid:
        return self.identityId
    """
    The statement reference id
    """
    def reference(self) -> Uuid:
        return self.reference
    """
    The name of the statement
    """
    def qualifier(self) -> String:
        return self.qualifier
    """
    Detailed description about the statement
    """
    def appendent(self) -> String:
        return self.appendent
    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self) -> Struct:
        return self.utterance
    """
    The list of labels of the statement
    """
    def labellist(self) -> String:
        return self.labellist
    """
    The version of the statement
    """
    def version(self) -> String:
        return self.version
