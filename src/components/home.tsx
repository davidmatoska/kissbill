import { useState } from 'react';
import { IArticle } from "../models/Article.type";
import { dummyArticleList } from "../models/DummyArticleList";
import "./Home.style.css";

const Home = () => {
    const [articleList, setArticleList] = useState(dummyArticleList as IArticle[]);
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Ticket de caisse</h1>
                </header>
            </article>

            <section className="section-content">
                <div>contenu</div>
            </section>
        </>
    );
};

export default Home;