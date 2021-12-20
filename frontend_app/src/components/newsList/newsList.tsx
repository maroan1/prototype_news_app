import React, {useEffect} from 'react';
import NewsListItem from "./newsListItem";
import {newsApi} from "../../api/news";

type AppProps = {
    news: Array<News>,
    setNews: (news: Array<News>) => void,
    type: "news" | "archive"
    loading: boolean
}

const NewsList = ({news, setNews, type, loading}: AppProps) => {

    const archiveDelete = (_id: string) => {
        let newsCopy = [...news];
        switch (type) {
            case "news":
                newsApi.archiveNewsItem(_id).then(() => {
                        newsCopy = newsCopy.filter(article => article._id !== _id);
                        setNews(newsCopy);
                });
                break;
            case "archive":
                newsApi.deleteNewsItem(_id).then(() => {
                    newsCopy = newsCopy.filter(article => article._id !== _id);
                    setNews(newsCopy);
                })
        }
    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className="container col-md-8 offset-md-2" style={{backgroundColor: 'lightgray'}}>
                    {loading ?
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> :
                        news.length > 0 ?
                        news.map(newsItem => (
                                <NewsListItem key={newsItem._id} newsItem={newsItem} newsType={type} buttonOnClickFunction={(_id) => {
                                    archiveDelete(_id);
                                }}/>)) : <h1>There are no news available.</h1>
                    }

                </div>
            </div>
        </div>
    );
};

export default NewsList;
