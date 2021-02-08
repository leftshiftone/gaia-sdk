

#  Copyright (c) 2016-2021, Leftshift One
#  __________________
#  [2021] Leftshift One
#  All Rights Reserved.
#  NOTICE:  All information contained herein is, and remains
#  the property of Leftshift One and its suppliers,
#  if any.  The intellectual and technical concepts contained
#  herein are proprietary to Leftshift One
#  and its suppliers and may be covered by Patents,
#  patents in process, and are protected by trade secret or copyright law.
#  Dissemination of this information or reproduction of this material
#  is strictly forbidden unless prior written permission is obtained
#  from Leftshift One.

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class MetricsEntityCount:
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
    def intents(self) -> Int:
        return Int(self.dictionary.get("intents"))
    @property
    def prompts(self) -> Int:
        return Int(self.dictionary.get("prompts"))
    @property
    def statements(self) -> Int:
        return Int(self.dictionary.get("statements"))
    @property
    def fulfilments(self) -> Int:
        return Int(self.dictionary.get("fulfilments"))
    @property
    def behaviours(self) -> Int:
        return Int(self.dictionary.get("behaviours"))
    @property
    def codes(self) -> Int:
        return Int(self.dictionary.get("codes"))
