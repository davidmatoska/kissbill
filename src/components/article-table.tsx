import React, { FunctionComponent } from 'react';
import Article from '../models/article';
import './article-table.css';
  
type Props = {
  article: Article
};


  
const ArticleTableRow: FunctionComponent<Props> = ({article}) => {
    
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
  
export default ArticleTableRow;