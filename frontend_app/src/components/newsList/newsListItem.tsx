import React, {useEffect, useState} from 'react';

type AppProps = {
    newsItem: News,
    newsType: "news" | "archive",
    buttonOnClickFunction: (_id: string) => void
}

const NewsListItem = ({newsItem, newsType, buttonOnClickFunction}: AppProps) => {
    const [dateString, setDateString] = useState<string>("");

    useEffect(() => {
        if (newsItem.date !== undefined) {
            const dateToString = new Date(newsItem.date);
            setDateString( dateToString.toDateString() + " " + dateToString.toLocaleTimeString());
        }
    }, [newsItem.date])

    return (
        <div className="card m-2">
            <div className="card-header">
                <div className="float-sm-end">
                    {
                        newsType === "news" ?
                            (<button type="button" className="btn btn-warning" onClick={(event) => {
                                buttonOnClickFunction(newsItem._id)
                            }} title="Archive">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-archive" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>) :
                            (<button type="button" className="btn btn-danger" onClick={(event) => {
                                buttonOnClickFunction(newsItem._id)
                            }} title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>)
                    }
                </div>
                <h5 className="card-title">{newsItem.title}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                    {newsItem.description}
                </h6>
                <p className="card-text">
                    {newsItem.content}
                </p>
            </div>
            <div className="card-footer">
                <div className="float-lg-start">
                    {newsItem.author}
                </div>
                <div className="float-lg-end">
                    {dateString}
                </div>
            </div>
        </div>
    );
};

export default NewsListItem;
