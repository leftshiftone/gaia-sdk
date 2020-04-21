
from graphql.response.type.StreamingImpulse import StreamingImpulse
from graphql.response.input.StreamImpulse import StreamImpulse


class Practice:
    """
    This type contains all practice sensor impulses which are used to support
    practice in gaia.
    """
    """
    Stream practice preparation impulse used to transfer a skill to gaia.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    def prepare(self) -> StreamingImpulse:
        return self.prepare
