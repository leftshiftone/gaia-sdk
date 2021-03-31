from typing import Callable, List, TypeVar

from rx.core.typing import Observable

import rx
from gaia_sdk.graphql import QueryRes, MutationRes
from gaia_sdk.graphql.GaiaResponse import QueryResponse, MutationResponse
from rx import operators as ops, pipe

T = TypeVar('T')


def mapQ(observable: Observable[QueryResponse], mapper: Callable[[QueryRes], T]) -> Observable[T]:
    def flat_map(obj: QueryResponse):
        if obj.errors and len(obj.errors) > 0:
            return rx.throw(obj.errors[0]["message"])
        return rx.of(mapper(obj.data))

    return pipe(ops.map(lambda x: QueryResponse(x)),
                ops.flat_map(flat_map))(observable)


def flat_mapQ(observable: Observable[QueryResponse], mapper: Callable[[QueryRes], List[T]]) -> Observable[T]:
    def flat_map(obj: QueryResponse):
        if obj.errors and len(obj.errors) > 0:
            return rx.throw(obj.errors[0]["message"])
        return rx.from_iterable(mapper(obj.data))

    return pipe(ops.map(lambda x: QueryResponse(x)),
                ops.flat_map(flat_map))(observable)


def mapM(observable: Observable[MutationResponse], mapper: Callable[[MutationRes], T]) -> Observable[T]:
    def flat_map(response: MutationResponse):
        if response.errors and len(response.errors) > 0:
            return rx.throw(response.errors[0]["message"])
        return rx.of(mapper(response.data))

    return pipe(ops.map(lambda x: MutationResponse(x)),
                ops.flat_map(flat_map))(observable)


def flat_mapM(observable: Observable[MutationResponse], mapper: Callable[[MutationRes], List[T]]) -> Observable[T]:
    def flat_map(obj: MutationResponse):
        if obj.errors and len(obj.errors) > 0:
            return rx.throw(obj.errors[0]["message"])
        return rx.from_iterable(mapper(obj.data))

    return pipe(
        ops.map(lambda x: MutationResponse(x)),
        ops.flat_map(flat_map)
    )(observable)
