import React, {FunctionComponent, useState, useEffect} from 'react';
import TicketModel from './models/articles';
import TICKETS, { ARTICLES } from './models/mock-ticket';
  
const App: FunctionComponent = () => {
 const [articles, setArticles] = useState<TicketModel[]>([]);

 useEffect (() => {setArticles(ARTICLES);
}, []);
    
 return (
    <div>
        <h1>TICKET DE CAISSE</h1>
        <p>Il y a {articles.length} articles sur le ticket de caisse </p>
            <div className="container">
                {articles.map(({reference, quantite, prix, created}) => (
                    <div className="col s6 m4" key={reference}>
                    <div className ="card horizontal">
                    <div className="card-stacked">
                    <div className="cart-content">
                        <p>{reference}</p>
                        <p><small> {created.toString()}</small></p>
                    </div>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
    </div>


 )
}
  
export default App;