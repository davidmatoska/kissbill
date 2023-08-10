import { useState } from 'react';
import { IArticle } from "../models/Article.type";
import { dummyArticleList } from "../models/DummyArticleList";
import ArticleList from "../models/ArticleList";
import AddArticle from './AddArticle';
import "./Home.style.css";
import { PageEnum } from '../pages/PageEnume';

const Home = () => {
    
    const [articleList, setArticleList] = useState(dummyArticleList as IArticle[]);

    const [shownPage, setShownPage] = useState(PageEnum.list);

    const onAddArticleClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list)
    };

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Ticket de caisse</h1>
                </header>
            </article>

            <section className="section-content">
                <div>contenu</div>
                {shownPage === PageEnum.list && (
                    <>
                <input type="button" value="Ajout article" onClick={onAddArticleClickHnd}/>
                <ArticleList list={articleList} />
                    </>
                )
                }

                {shownPage === PageEnum.add && <AddArticle onBackBtnClickHnd={showListPage} />}
            </section>
        </>
    );
};

export default Home;