import React, { FunctionComponent } from 'react';
import Article from '../models/article';
  
type Props = {
  article: Article
};
  
const PokemonCard: FunctionComponent<Props> = ({article}) => {
    
  return (
    <div className="col s12">
          <div className="card-content">
            <p>{article.reference}</p>
            <p><small>{article.created.toString()}</small></p>
          </div>
        </div>
  );
}
  
export default PokemonCard;