import React, {FunctionComponent, useState, useEffect} from 'react';
import TicketModel from './models/ticket-model';
import TICKETS from './models/mock-ticket';
  
const App: FunctionComponent = () => {
 const [tickets, setTickets] = useState<TicketModel[]>(TICKETS);

 useEffect (() => {setTickets(TICKETS);
}, []);
    
 return (
    <div>
        <h1>TICKET DE CAISSE</h1>
        <p>Hello! Il y a {tickets.length} articles sur le ticket de caisse </p>
    </div>
 )
}
  
export default App;