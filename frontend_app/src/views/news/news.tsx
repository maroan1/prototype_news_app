import React, {useEffect} from 'react';
import {newsApi} from "../../api/news";
import NewsList from "../../components/newsList/newsList";

const News: React.FC = () => {
    const [news, setNews] = React.useState<Array<News>>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const ws = React.useRef<WebSocket>();

    const addNewArticle = (article: News) => {
        const articles = [...news];
        articles.unshift(article);
        setNews(articles);
    };

    useEffect(() => {
        newsApi.getNews().then(data => {
           setNews(data);
           setLoading(false);
        });

    }, []);

    useEffect(() => {
        ws.current?.close();
        ws.current = new WebSocket('ws://localhost:8080');
        ws.current.onmessage = (event) => {
            const article = JSON.parse(event.data);
            addNewArticle(article);
        }
    }, [news]);


    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <NewsList news={news} setNews={setNews} type="news" loading={loading}/>
                </div>
            </div>
        </div>
    );
};

export default News;

