import { useState } from 'react';
import { IArticle } from "../models/Article.type";
import { dummyArticleList } from "../models/DummyArticleList";
import ArticleList from "../models/ArticleList";
import "./Home.style.css";

const Home = () => {
    
    const [articleList, setArticleList] = useState(dummyArticleList as IArticle[]);

    const [shownPage, setShownPage] = useState("list")

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Ticket de caisse</h1>
                </header>
            </article>

            <section className="section-content">
                <div>contenu</div>
                {shownPage === "list" && (
                    <>
                <input type="button" value="Ajout article"/>
                <ArticleList list={articleList} />
                    </>
                )
                }
            </section>
        </>
    );
};

export default Home;