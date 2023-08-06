// import React, { FunctionComponent } from 'react';
import Article from '../models/article';
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "reference",
    header: "Référence",
  },
  {
    accessorKey: "quantite",
    header: "Email",
  },
  {
    accessorKey: "prix",
    header: "prix unitaire",
  },
]

/* type Props = {
  article: Article
};


  
const ArticleTable: FunctionComponent<Props> = ({article}) => {
    
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
  
export default ArticleTable; */