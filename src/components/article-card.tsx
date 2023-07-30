import React, {FunctionComponent} from 'react';
import Article from '../models/articles';

type Props = {
    article: Article
};

const ArticleCard: FunctionComponent<Props> = ({article}) => {

    return (
        <div>
            Ce composant affiche un article : {article.reference}
        </div>
    );
}

export default ArticleCard;