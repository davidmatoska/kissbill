import "../components/ArticleTable.style.css"
import { IArticle } from "./Article.type";

type Props = {
    list: IArticle[];
    onDeleteClickHnd: (data: IArticle) => void
};

const ArticleList = (props:Props) => {
    const { list, onDeleteClickHnd } = props;

    return (
    <div>
      <article>
        <h3 className="list-header">TICKET DE CAISSE</h3>
      </article>
      <table>
        <tr>
          <th>Référence</th>
          <th>Prix unitaire</th>
          <th>Quantité</th>
          <th>Modifier/Supprimer</th>
        </tr>
        {list.map((article) => {
          return (
            <tr key={article.id}>
              <td>{`${article.reference}`}</td>
              <td>{`${article.price}`}</td>
              <td>quantité</td>
              <td>
                <div>
                  <input 
                  type="button" 
                  value="Modifier"></input>
                  <input 
                  type="button" 
                  value="Supprimer" 
                  onClick={() => onDeleteClickHnd(article)}></input>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
        )
    
};

export default ArticleList;