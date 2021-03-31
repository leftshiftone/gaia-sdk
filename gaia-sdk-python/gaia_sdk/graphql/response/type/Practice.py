
from gaia_sdk.graphql.response.type.CanceledSkillBuildJobImpulse import CanceledSkillBuildJobImpulse
from gaia_sdk.graphql.response.type.CreatedSkillBuildJobImpulse import CreatedSkillBuildJobImpulse
from gaia_sdk.graphql.response.type.StreamingImpulse import StreamingImpulse

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Practice:
    """
    This type contains all practice sensor impulses which are used to support
    practice in gaia.
    """
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    """
    Stream practice preparation impulse used to transfer a skill to gaia.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    @property
    def prepare(self) -> StreamingImpulse:
        return StreamingImpulse(self.dictionary.get("prepare"))
    @property
    def build(self) -> CreatedSkillBuildJobImpulse:
        return CreatedSkillBuildJobImpulse(self.dictionary.get("build"))
    @property
    def cancel(self) -> CanceledSkillBuildJobImpulse:
        return CanceledSkillBuildJobImpulse(self.dictionary.get("cancel"))
