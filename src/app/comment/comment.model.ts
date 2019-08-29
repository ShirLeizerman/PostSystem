export class Comment {
    id: string;
    title: string;
    text: string;
    tags: string[];
    creationTime: Date;

    constructor(id: string, title: string, text: string, tags: string[], creationTime: Date) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.tags = [...tags];
        this.creationTime = creationTime || new Date();
    }
}
