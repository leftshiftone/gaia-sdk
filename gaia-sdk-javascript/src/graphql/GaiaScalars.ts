import {v4 as uuid} from 'uuid';

export class UUID {

    private readonly value:string;

    constructor(uuid: string) {
        this.value = uuid;
    }

    public static randomUUID(): UUID {
        return new UUID(uuid())
    }

    public toString(): string {
        return this.value;
    }

}
