export class Comment {
    id: string;
    title: string;
    text: string;
    tags: string[];

    constructor(id: string, title: string, text: string, tags: string[]) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.tags = [...tags];
    }
}
