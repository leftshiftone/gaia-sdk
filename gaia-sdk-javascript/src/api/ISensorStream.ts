import {DataRef} from "./DataRef";

export interface ISensorStream {
    data(uri: string): DataRef
}
