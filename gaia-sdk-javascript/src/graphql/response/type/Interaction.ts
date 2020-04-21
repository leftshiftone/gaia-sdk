
import {OnConversed} from "./OnConversed";

import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export interface Interaction {
    onConversed?:OnConversed
}