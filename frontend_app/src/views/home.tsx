import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import News from "./news/news";
import Archive from "./archive/archive";
import './home.css';

const Home: React.FC = () => {
    const [active, setActive] = React.useState<string>('news');

    return (
        <div>
            <ul className="nav nav-tabs sticky-top bg-white">
                <li className="nav-item">
                    <span className={active !== "archive" ? "nav-link active" : "nav-link"}
                       onClick={() => setActive('news')}>News</span>
                    {/*<Link to={"/"} className={active !== "archive" ? "nav-link active" : "nav-link"}>News</Link>*/}
                </li>
                <li className="nav-item">
                    <span  className={active === "archive" ? "nav-link active" : "nav-link"}
                       onClick={() => setActive('archive')}>Archive</span>
                    {/*<Link to="/archive" className={active === "archive" ? "nav-link active" : "nav-link"}>Archive</Link>*/}
                </li>
            </ul>

            {active !== "archive" ? <News/> : <Archive/>}
        </div>
    );
};

export default Home;
