import {Uuid} from "../../GaiaClient";

export interface CancelSkillBuildJobImpulse {
    id?:Uuid,
    /**
    * Tenant of the build job
    */
    tenantId?:Uuid,
    /**
    * The id of the build job being canceled
    */
    buildJobRef?:Uuid
}
