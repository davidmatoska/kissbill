/*import { useState } from "react";
import { IArticle } from "./Article.type";


const [articleList, setArticleList] = useState([] as IArticle[]);*/

import "../components/ArticleTable.style.css"
import { IArticle } from "./Article.type";

type Props = {
    list: IArticle[]
}

const ArticleList = (props:Props) => {
    const { list } = props;
    return <div>la liste des articles
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
            <input type="button" value="Modifier"></input>
            <input type="button" value="Supprimer"></input>
          </div>
        </td>
      </tr>
    );
  })}
        </table>
    </div>

    
};

export default ArticleList;