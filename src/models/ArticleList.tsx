import { useState } from "react";
import { IArticle } from "./Article.type";


const [articleList, setArticleList] = useState([] as IArticle[]);