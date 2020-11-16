export enum RuntimeState {
    RUNNING
}


export function getRuntimeStateEnumClass(enumValue: RuntimeState): any {
    switch (enumValue) {
        case RuntimeState.RUNNING:
            return new RUNNING();
    }
}

export class RUNNING {
    public _typeName = "RuntimeState";
    public _isWrapper = true;
    public _wrappedValue = "RUNNING";

    constructor() {}
}

