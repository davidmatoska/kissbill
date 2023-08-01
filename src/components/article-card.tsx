import React, { FunctionComponent } from 'react';
import Article from '../models/article';
import './article-card.css';
  
type Props = {
  article: Article
};
  
const ArticleCard: FunctionComponent<Props> = ({article}) => {
    
  return (
    <div className="col s12">
      <div className="card horizontal">

      <table>
        <thead>
          <tr>
              <th>Référence</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Ajout</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>{article.reference}</td>
            <td>{article.quantite}</td>
            <td>{article.prix}</td>
            <td><small>{article.created.toString()}</small></td>
          </tr>

        </tbody>
      </table>

      </div>
    </div>
  );
}
  
export default ArticleCard;