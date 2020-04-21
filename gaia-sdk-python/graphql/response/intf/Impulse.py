


class Impulse:
    """
    Each message returned from GAIA implements this interface
    """
    """
    The id of the impulse
    """
    def id(self) -> Uuid:
        return self.id
