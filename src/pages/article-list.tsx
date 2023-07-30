import React, { FunctionComponent, useState, useEffect } from 'react';
import Article from '../models/articles';
import ARTICLES from '../models/mock-ticket';
import ArticleCard from '../components/article-card';
  
const ArticleList: FunctionComponent = () => {
  const [article, setArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    setArticles(ARTICLES);
  }, []);
  
  return (
    <div>
      <h1 className="center">TICKET</h1>
      <div className="container"> 
        <div className="row"> 
        {article.map(article => (
          <ArticleCard key={article.reference} article={article}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default ArticleList;