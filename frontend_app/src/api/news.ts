import config from '../config';

function getNews(): Promise<Array<News>> {
    return fetch(config.apiUrl + "/news")
        .then(response => response.json())
        .then(json => json.data.news);
}

function getArchivedNews(): Promise<Array<News>> {
    return fetch(config.apiUrl + "/news/archived")
        .then(response => response.json())
        .then(json => json.data.news);
}

function archiveNewsItem(_id: string): Promise<Response> {
    return fetch(config.apiUrl + "/news/archive", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:_id})
    });
}

function deleteNewsItem(_id: string): Promise<Response> {
    return fetch(config.apiUrl + "/news/" + _id, {
        method: 'DELETE'
    });
}

export const newsApi = {
    getNews,
    getArchivedNews,
    archiveNewsItem,
    deleteNewsItem
}
