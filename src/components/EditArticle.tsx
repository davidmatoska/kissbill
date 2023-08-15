import { useState } from "react";
import { IArticle } from "../models/Article.type";
import "./ArticleTable.style.css";

type Props = {
    data: IArticle
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IArticle) => void
};

const EditArticle = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [id, setId] = useState(data.id);

    const [reference, setReference] = useState(data.reference);

    const [price, setPrice] = useState(data.price);

    const onIdChangeHnd = (e: any) => {
        setId(e.target.value)
    }

    const onReferenceChangeHnd = (e: any) => {
        setReference(e.target.value)
    }

    const onPriceChangeHnd = (e: any) => {
        setPrice(e.target.value)

    }

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedData: IArticle = {
            id: id,
            reference: reference,
            price: price
        }

        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();

    }

    return <div className="form-container">
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
                <input type="submit" value="Modifier" />
            </div>
        </form>
    </div>
}

export default EditArticle;