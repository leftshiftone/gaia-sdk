

/*
 * Copyright (c) 2016-2021, Leftshift One
 * __________________
 * [2021] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class MetricsEntityCount extends Array<(_:VariableRegistry) => string> {
public _typeName = "MetricsEntityCount";
    public intents = () => {
        this.push(_ => "intents")
    };

    public prompts = () => {
        this.push(_ => "prompts")
    };

    public statements = () => {
        this.push(_ => "statements")
    };

    public fulfilments = () => {
        this.push(_ => "fulfilments")
    };

    public behaviours = () => {
        this.push(_ => "behaviours")
    };

    public codes = () => {
        this.push(_ => "codes")
    };

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

