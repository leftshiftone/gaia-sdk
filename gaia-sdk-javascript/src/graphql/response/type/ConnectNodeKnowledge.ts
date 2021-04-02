
import {ConnectNodeRemovedImpulse} from "./ConnectNodeRemovedImpulse";
import {ConnectNodeUnsetImpulse} from "./ConnectNodeUnsetImpulse";
import {ConnectNodeAppendedImpulse} from "./ConnectNodeAppendedImpulse";
import {ConnectNodeSetImpulse} from "./ConnectNodeSetImpulse";
import {ConnectSetNodeImpulse} from "../../request/input/ConnectSetNodeImpulse";
import {ConnectAppendNodeImpulse} from "../../request/input/ConnectAppendNodeImpulse";
import {ConnectUnsetNodeImpulse} from "../../request/input/ConnectUnsetNodeImpulse";
import {ConnectRemoveNodeImpulse} from "../../request/input/ConnectRemoveNodeImpulse";

import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../../request/enumeration/Order";
import {OrderByField} from "../../request/enumeration/OrderByField";
import {EdgeOrderByField} from "../../request/enumeration/EdgeOrderByField";

export interface ConnectNodeKnowledge {
    append?:ConnectNodeAppendedImpulse, 
    remove?:ConnectNodeRemovedImpulse, 
    set?:ConnectNodeSetImpulse, 
    unset?:ConnectNodeUnsetImpulse
}