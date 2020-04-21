


class Prompt:
    """
    this type represents the prompt information
    """
    """
    The prompt id
    """
    def identityId(self) -> Uuid:
        return self.identityId
    """
    The prompt reference id
    """
    def reference(self) -> Uuid:
        return self.reference
    """
    The name of the prompt
    """
    def qualifier(self) -> String:
        return self.qualifier
    """
    Detailed description about the prompt
    """
    def appendent(self) -> String:
        return self.appendent
    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self) -> Struct:
        return self.utterance
    """
    The list of labels of the prompt
    """
    def labellist(self) -> String:
        return self.labellist
    """
    The version of the prompt
    """
    def version(self) -> String:
        return self.version
