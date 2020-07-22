export class Data {
    private path: string;

    constructor() {
        this.path = "";
    }

    public createRef(path: string) {
        console.log("Create DataRef");
        this.path = path;
        return new DataRef(path);
    }
}

export class DataRef {
    private readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    public add(filename: string, content: any) {
        console.log("Add " + filename);
        console.log(content);
        console.log("To: " + this.path);
    }

    public list() {
        console.log("List from " + this.path);
    }

    public remove() {
        console.log("Remove: " + this.path)
    }

    public asFile() {
        console.log("asFile")
    }

    public asStream() {
        console.log("asStream")
    }

    public append(dataToAppend: any) {
        console.log("Append: " + dataToAppend)
    }
}
