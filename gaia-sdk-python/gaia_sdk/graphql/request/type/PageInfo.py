

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class PageInfo(list):
    """
    Represents information used for paginiation
    """

    def start_cursor(self):
        self.append(lambda x: "startCursor")

    def end_cursor(self):
        self.append(lambda x: "endCursor")

    def has_next_page(self):
        self.append(lambda x: "hasNextPage")

    def has_previous_page(self):
        self.append(lambda x: "hasPreviousPage")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
