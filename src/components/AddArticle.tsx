import { useState } from "react";
import "./ArticleForm.style.css";
import { IArticle } from "../models/Article.type";
import ArticleList from "../models/ArticleList";


type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IArticle) => void
};

const AddArticle = (props: Props) => {

    const [id, setId] = useState("");

    const [reference, setReference] = useState("");

    const [price, setPrice] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onIdChangeHnd = (e: any) => {
        setId(e.target.value)
    };

    const onReferenceChangeHnd = (e: any) => {
        setReference(e.target.value)
    };

    const onPriceChangeHnd = (e: any) => {
        setPrice(e.target.value)

    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const data: IArticle = {
            id: id,
            reference: reference,
            price: price
        }

        onSubmitClickHnd(data);
        onBackBtnClickHnd();

    }


    return (
        <div className="form-container">
            <div>
                <h3>Ajout Article</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>identifiant</label>
                    <input type="text" value={id} onChange={onIdChangeHnd} />
                </div>
                <div>
                    <label>référence</label>
                    <input type="text" value={reference} onChange={onReferenceChangeHnd} />
                </div>
                <div>
                    <label>prix unitaire</label>
                    <input type="number" pattern="[0-9]*" value={price} onChange={onPriceChangeHnd} />
                </div>
                <div>
                    <input type="button" value="Retour" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Ajouter" />
                </div>
            </form>
        </div>
    )
};

export default AddArticle;