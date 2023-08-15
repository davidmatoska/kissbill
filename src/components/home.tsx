import { useState } from 'react';
import { IArticle } from "../models/Article.type";
import { dummyArticleList } from "../models/DummyArticleList";
import ArticleList from "../models/ArticleList";
import AddArticle from './AddArticle';
import "./Home.style.css";
import { PageEnum } from '../pages/PageEnume';
import EditArticle from './EditArticle';

const Home = () => {
    
    const [articleList, setArticleList] = useState(dummyArticleList as IArticle[]);

    const [shownPage, setShownPage] = useState(PageEnum.list);

    const onAddArticleClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list)
    };

    const addArticle = (data: IArticle) => {
        setArticleList([...articleList, data])
    };

    const deleteArticle = (data: IArticle) => {
        // To index from array i,e articleList
        // Splice that
        // update new record

        const indexToDelete = articleList.indexOf(data);
        const tempList = [...articleList];

        tempList.splice(indexToDelete, 1);
        setArticleList(tempList)
    };

    const editArticleData = (data: IArticle) => {
        setShownPage(PageEnum.edit);
    }

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Ticket de caisse</h1>
                </header>
            </article>

            <section className="section-content">
             
                {shownPage === PageEnum.list && (
                    <>
                
                <input 
                className="add-article-btn" 
                type="button" 
                value="Ajout article" 
                onClick={onAddArticleClickHnd}
                />

                <ArticleList 
                list={articleList} 
                onDeleteClickHnd={deleteArticle}
                onEdit={editArticleData}
                />
                    </>
                )
                }

                {shownPage === PageEnum.add && (
                <AddArticle onBackBtnClickHnd={showListPage} onSubmitClickHnd={addArticle} />
                )}

                {shownPage === PageEnum.edit && <EditArticle />}

            </section>
        </>
    );
};

export default Home;