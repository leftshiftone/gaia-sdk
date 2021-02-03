import {MutationResponse, QueryResponse} from "..";
import {Query} from "../graphql/response/type/Query";
import {flatMap, map} from "rxjs/operators";
import {Mutation} from "../graphql/response/type/Mutation";
import {defer, Observable, of, throwError} from "rxjs";

export class Rx {

    static mapQ<T>(observable: Observable<QueryResponse>, mapper: (_: Query) => T): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return of(mapper(e.data as Query));
            }));
    }

    static flatMapQ<T>(observable: Observable<QueryResponse>, mapper: (_: Query) => [T]): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return defer(() => mapper(e.data as Query));
            }));
    }

    static mapM<T>(observable: Observable<MutationResponse>, mapper: (_: Mutation) => T): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return of(mapper(e.data as Mutation));
            }));
    }

    static flatMapM<T>(observable: Observable<MutationResponse>, mapper: (_: Mutation) => [T]): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return defer(() => mapper(e.data as Mutation));
            }));
    }


}
