import React, {FunctionComponent, useState, useEffect} from 'react';
import Article from './models/article';
import ARTICLES from './models/mock-ticket';
import ArticleList from './pages/article-list';
  
const App: FunctionComponent = () => {
 const [articles, setArticles] = useState<Article[]>([]);

 useEffect (() => {setArticles(ARTICLES);
}, []);
    
 return (
    <ArticleList />
 )
}
  
export default App;