from typing import List

from gaia_sdk.graphql.response.type.Behaviour import Behaviour
from gaia_sdk.graphql.response.type.Code import Code
from gaia_sdk.graphql.response.type.Edge import Edge
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment
from gaia_sdk.graphql.response.type.Identity import Identity
from gaia_sdk.graphql.response.type.Intent import Intent
from gaia_sdk.graphql.response.type.Prompt import Prompt
from gaia_sdk.graphql.response.type.Skill import Skill
from gaia_sdk.graphql.response.type.SkillProvision import SkillProvision
from gaia_sdk.graphql.response.type.Statement import Statement

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Knowledge:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def identities(self) -> List[Identity]:
        return list(map(lambda x: Identity(x), self.dictionary.get("identities")))

    @property
    def identity(self) -> Identity:
        return Identity(self.dictionary.get("identity"))

    @property
    def intents(self) -> List[Intent]:
        return list(map(lambda x: Intent(x), self.dictionary.get("intents")))

    @property
    def intent(self) -> Intent:
        return Intent(self.dictionary.get("intent"))

    @property
    def prompts(self) -> List[Prompt]:
        return list(map(lambda x: Prompt(x), self.dictionary.get("prompts")))

    @property
    def prompt(self) -> Prompt:
        return Prompt(self.dictionary.get("prompt"))

    @property
    def fulfilments(self) -> List[Fulfilment]:
        return list(map(lambda x: Fulfilment(x), self.dictionary.get("fulfilments")))

    @property
    def fulfilment(self) -> Fulfilment:
        return Fulfilment(self.dictionary.get("fulfilment"))

    @property
    def statements(self) -> List[Statement]:
        return list(map(lambda x: Statement(x), self.dictionary.get("statements")))

    @property
    def statement(self) -> Statement:
        return Statement(self.dictionary.get("statement"))

    @property
    def codes(self) -> List[Code]:
        return list(map(lambda x: Code(x), self.dictionary.get("codes")))

    @property
    def code(self) -> Code:
        return Code(self.dictionary.get("code"))

    @property
    def behaviours(self) -> List[Behaviour]:
        return list(map(lambda x: Behaviour(x), self.dictionary.get("behaviours")))

    @property
    def behaviour(self) -> Behaviour:
        return Behaviour(self.dictionary.get("behaviour"))

    @property
    def edges(self) -> List[Edge]:
        return list(map(lambda x: Edge(x), self.dictionary.get("edges")))

    @property
    def edge(self) -> Edge:
        return Edge(self.dictionary.get("edge"))

    @property
    def skills(self) -> List[Skill]:
        return list(map(lambda x: Skill(x), self.dictionary.get("skills")))

    @property
    def skill(self) -> Skill:
        return Skill(self.dictionary.get("skill"))

    @property
    def skill_provisions(self) -> List[SkillProvision]:
        return list(map(lambda x: SkillProvision(x), self.dictionary.get("skillProvisions")))

    @property
    def skill_provision(self) -> SkillProvision:
        return SkillProvision(self.dictionary.get("skillProvision"))
