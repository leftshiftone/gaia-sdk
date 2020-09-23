import {Struct, Uuid} from "../../GaiaClient";

/**
 * The specification to create a SkillProvision instance
 */
export class CreateSkillProvisionImpulse {

    private tenantId:Uuid;
    private qualifier:String;
    private appendent:String;
    private labelList:Array<String>;
    private version:String;
    private skillRef:String;
    private cpu:Number;
    private memory:Number;
    private replicas:Number;
    private enabled:Boolean;
    private bootstrapTimeout:Number;
    private environment:Struct;

    constructor (tenantId:Uuid, qualifier:String, appendent:String, labelList:Array<String>, version:String, skillRef:String, cpu:Number, memory:Number, replicas:Number, enabled:Boolean, bootstrapTimeout:Number, environment:Struct) {
        this.tenantId = tenantId;
        this.qualifier = qualifier;
        this.appendent = appendent;
        this.labelList = labelList;
        this.version = version;
        this.skillRef = skillRef;
        this.cpu = cpu;
        this.memory = memory;
        this.replicas = replicas;
        this.enabled = enabled;
        this.bootstrapTimeout = bootstrapTimeout;
        this.environment = environment;
    }
}
