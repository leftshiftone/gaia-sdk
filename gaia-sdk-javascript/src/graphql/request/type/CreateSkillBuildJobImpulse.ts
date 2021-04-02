import VariableRegistry from "../../../api/VariableRegistry";

export class CreateSkillBuildJobImpulse extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreateSkillBuildJobImpulse";
    /**
     * The unique identifier of this specific impulse
     */
    public id = () => {
        this.push(_ => "id")
    };

    /**
     * The reference of the skill being built
     */
    public skillRef = () => {
        this.push(_ => "skillRef")
    };

    public tag = () => {
        this.push(_ => "tag")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

