import VariableRegistry from "../../../api/VariableRegistry";

/**
 * This impulse returns the result of a skill practice query request
 */
export default class SkillPracticedImpulse extends Array<(_:VariableRegistry) => string> {

    public id = () => {
        this.push(_ => "id")
    };

    /**
     * The result of the skill practice
     */
    public data = () => {
        this.push(_ => "data")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

