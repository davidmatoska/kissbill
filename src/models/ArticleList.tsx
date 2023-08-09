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
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  {list.map((article) => {
    return (
        <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
    );
  })}
        </table>
    </div>

    
};

export default ArticleList;