import React, { FunctionComponent } from 'react';
import Article from '../models/article';
import './article-table.css';
import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table';


export default function ArticleTable(){

  const table = useReactTable(gh)

  return <div>tableau</div>
}

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