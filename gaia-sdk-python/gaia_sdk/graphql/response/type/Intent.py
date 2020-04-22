


class Intent:
    """
    this type represents the intent information
    """
    """
    The identity id
    """
    def identityId(self) -> Uuid:
        return self.identityId
    """
    The intent reference id
    """
    def reference(self) -> Uuid:
        return self.reference
    """
    The name of the intent
    """
    def qualifier(self) -> String:
        return self.qualifier
    """
    Detailed description about the intent
    """
    def appendent(self) -> String:
        return self.appendent
    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self) -> Struct:
        return self.utterance
    """
    The list of labels of the intent
    """
    def labellist(self) -> String:
        return self.labellist
    """
    The version of the intent
    """
    def version(self) -> String:
        return self.version
