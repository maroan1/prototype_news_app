/// <reference types="react-scripts" />

type News = {
    _id: string;
    title: string,
    description: string,
    date: Date;
    content: string,
    author: string,
    archiveDate?: Date;
}
