export enum SkillState {
    RUNNING
}


export function getSkillStateEnumClass(enumValue: SkillState): any {
    switch (enumValue) {
        case SkillState.RUNNING:
            return new RUNNING();
    }
}

export class RUNNING {
    public _typeName = "SkillState";
    public _isWrapper = true;
    public _wrappedValue = "RUNNING";

    constructor() {}
}

