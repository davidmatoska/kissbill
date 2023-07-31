import React, { FunctionComponent } from 'react';
import Article from '../models/article';
  
type Props = {
  article: Article
};
  
const PokemonCard: FunctionComponent<Props> = ({article}) => {
    
  return (
    <div className="col s6 m4">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <p>{article.reference}</p>
            <p><small>{article.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;