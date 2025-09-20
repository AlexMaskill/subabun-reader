class Book {
    id: string;
    title: string;
    author: string;
    uri: string;
    local: boolean;

    constructor(id: string, title: string, author: string, uri: string, local: boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.uri = uri;
        this.local = local;
    }
}

export { Book };