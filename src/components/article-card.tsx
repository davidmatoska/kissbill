import React, { FunctionComponent } from 'react';
import Article from '../models/article';
import './article-card.css';
  
type Props = {
  article: Article
};
  
const ArticleCard: FunctionComponent<Props> = ({article}) => {
    
  return (


      <table>

        <tbody>

          <tr>
            <td>{article.reference}</td>
            <td>{article.quantite}</td>
            <td>{article.prix}</td>
          </tr>

        </tbody>

      </table>

  );
}
  
export default ArticleCard;