


class Fulfilment:
    """
    this type represents the fulfilment information
    """
    """
    The fulfilment id
    """
    def identityId(self) -> Uuid:
        return self.identityId
    """
    The fulfilment reference id
    """
    def reference(self) -> Uuid:
        return self.reference
    """
    The name of the fulfilment
    """
    def qualifier(self) -> String:
        return self.qualifier
    """
    Detailed description about the fulfilment
    """
    def appendent(self) -> String:
        return self.appendent
    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self) -> Struct:
        return self.utterance
    """
    The list of labels of the fulfilment
    """
    def labellist(self) -> String:
        return self.labellist
    """
    The version of the fulfilment
    """
    def version(self) -> String:
        return self.version
