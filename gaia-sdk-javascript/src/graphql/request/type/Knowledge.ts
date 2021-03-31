
import {Fulfilment} from "./Fulfilment";
import {User} from "./User";
import {ApiKey} from "./ApiKey";
import {Behaviour} from "./Behaviour";
import {Statement} from "./Statement";
import {Intent} from "./Intent";
import {Code} from "./Code";
import {Role} from "./Role";
import {SkillProvision} from "./SkillProvision";
import {Skill} from "./Skill";
import {Tenant} from "./Tenant";
import {Prompt} from "./Prompt";
import {Identity} from "./Identity";
import {Edge} from "./Edge";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class Knowledge extends Array<(_:VariableRegistry) => string> {
public _typeName = "Knowledge";
    public users = (limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:User) => void) => this.push((registry) => {
        const name1 = registry.register("limit", limit);
        const name2 = registry.register("offset", offset);
        const name3 = registry.register("orderBy", orderBy);
        const name4 = registry.register("order", order);
        const entity = new User();
        config(entity);
        return `users(limit:${name1}, offset:${name2}, orderBy:${name3}, order:${name4}){` + entity.render(registry) + "}"
    });

    public user = (userId: Uuid|undefined, config: (_:User) => void) => this.push((registry) => {
        const name1 = registry.register("userId", userId);
        const entity = new User();
        config(entity);
        return `user(userId:${name1}){` + entity.render(registry) + "}"
    });

    public apiKeys = (limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:ApiKey) => void) => this.push((registry) => {
        const name1 = registry.register("limit", limit);
        const name2 = registry.register("offset", offset);
        const name3 = registry.register("orderBy", orderBy);
        const name4 = registry.register("order", order);
        const entity = new ApiKey();
        config(entity);
        return `apiKeys(limit:${name1}, offset:${name2}, orderBy:${name3}, order:${name4}){` + entity.render(registry) + "}"
    });

    public apiKey = (apiKeyId: Uuid|undefined, config: (_:ApiKey) => void) => this.push((registry) => {
        const name1 = registry.register("apiKeyId", apiKeyId);
        const entity = new ApiKey();
        config(entity);
        return `apiKey(apiKeyId:${name1}){` + entity.render(registry) + "}"
    });

    public roles = (tenantId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Role) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Role();
        config(entity);
        return `roles(tenantId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public role = (tenantId: Uuid|undefined, roleId: Uuid|undefined, config: (_:Role) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("roleId", roleId);
        const entity = new Role();
        config(entity);
        return `role(tenantId:${name1}, roleId:${name2}){` + entity.render(registry) + "}"
    });

    public tenants = (limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Tenant) => void) => this.push((registry) => {
        const name1 = registry.register("limit", limit);
        const name2 = registry.register("offset", offset);
        const name3 = registry.register("orderBy", orderBy);
        const name4 = registry.register("order", order);
        const entity = new Tenant();
        config(entity);
        return `tenants(limit:${name1}, offset:${name2}, orderBy:${name3}, order:${name4}){` + entity.render(registry) + "}"
    });

    public tenant = (tenantId: Uuid|undefined, config: (_:Tenant) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const entity = new Tenant();
        config(entity);
        return `tenant(tenantId:${name1}){` + entity.render(registry) + "}"
    });

    public identities = (limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Identity) => void) => this.push((registry) => {
        const name1 = registry.register("limit", limit);
        const name2 = registry.register("offset", offset);
        const name3 = registry.register("orderBy", orderBy);
        const name4 = registry.register("order", order);
        const entity = new Identity();
        config(entity);
        return `identities(limit:${name1}, offset:${name2}, orderBy:${name3}, order:${name4}){` + entity.render(registry) + "}"
    });

    public identity = (identityId: Uuid|undefined, config: (_:Identity) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Identity();
        config(entity);
        return `identity(identityId:${name1}){` + entity.render(registry) + "}"
    });

    public intents = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Intent) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Intent();
        config(entity);
        return `intents(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public intent = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Intent) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Intent();
        config(entity);
        return `intent(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public prompts = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Prompt) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Prompt();
        config(entity);
        return `prompts(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public prompt = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Prompt) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Prompt();
        config(entity);
        return `prompt(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public fulfilments = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Fulfilment) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Fulfilment();
        config(entity);
        return `fulfilments(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public fulfilment = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Fulfilment) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Fulfilment();
        config(entity);
        return `fulfilment(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public statements = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Statement) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Statement();
        config(entity);
        return `statements(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public statement = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Statement) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Statement();
        config(entity);
        return `statement(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public codes = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Code) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Code();
        config(entity);
        return `codes(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public code = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Code) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Code();
        config(entity);
        return `code(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public behaviours = (identityId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Behaviour) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Behaviour();
        config(entity);
        return `behaviours(identityId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public behaviour = (identityId: Uuid|undefined, reference: Uuid|undefined, config: (_:Behaviour) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Behaviour();
        config(entity);
        return `behaviour(identityId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public edges = (source: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: EdgeOrderByField|undefined, order: Order|undefined, config: (_:Edge) => void) => this.push((registry) => {
        const name1 = registry.register("source", source);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Edge();
        config(entity);
        return `edges(source:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public edge = (source: Uuid|undefined, edgeId: Uuid|undefined, config: (_:Edge) => void) => this.push((registry) => {
        const name1 = registry.register("source", source);
        const name2 = registry.register("edgeId", edgeId);
        const entity = new Edge();
        config(entity);
        return `edge(source:${name1}, edgeId:${name2}){` + entity.render(registry) + "}"
    });

    public skills = (tenantId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:Skill) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new Skill();
        config(entity);
        return `skills(tenantId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public skill = (tenantId: Uuid|undefined, reference: Uuid|undefined, config: (_:Skill) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("reference", reference);
        const entity = new Skill();
        config(entity);
        return `skill(tenantId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public skillProvisions = (tenantId: Uuid|undefined, limit: Number|undefined, offset: Number|undefined, orderBy: OrderByField|undefined, order: Order|undefined, config: (_:SkillProvision) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("limit", limit);
        const name3 = registry.register("offset", offset);
        const name4 = registry.register("orderBy", orderBy);
        const name5 = registry.register("order", order);
        const entity = new SkillProvision();
        config(entity);
        return `skillProvisions(tenantId:${name1}, limit:${name2}, offset:${name3}, orderBy:${name4}, order:${name5}){` + entity.render(registry) + "}"
    });

    public skillProvision = (tenantId: Uuid|undefined, reference: Uuid|undefined, config: (_:SkillProvision) => void) => this.push((registry) => {
        const name1 = registry.register("tenantId", tenantId);
        const name2 = registry.register("reference", reference);
        const entity = new SkillProvision();
        config(entity);
        return `skillProvision(tenantId:${name1}, reference:${name2}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

