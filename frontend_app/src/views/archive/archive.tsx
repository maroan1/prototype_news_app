import React, {useEffect} from 'react';
import {newsApi} from "../../api/news";
import NewsList from "../../components/newsList/newsList";

const Archive: React.FC = () => {
    const [news, setNews] = React.useState<Array<News>>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        newsApi.getArchivedNews().then(data => {
            setNews(data);
            setLoading(false);
        });

    }, []);



    return (
        <div>
            <div className="row">
                <div className="col-12">
                    {loading ?
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> :
                        <NewsList news={news} setNews={setNews} type="archive" loading={loading}/>}
                </div>
            </div>
        </div>
    );
};

export default Archive;

