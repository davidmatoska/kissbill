import { useState } from "react";
import "./ArticleForm.style.css";

type Props = {
    onBackBtnClickHnd : ()  => void
}

const AddArticle = (props : Props) => {

        const [id, setId] = useState("")

        const [reference, setReference] = useState("")

        const [price, setPrice] = useState("")

        const { onBackBtnClickHnd } = props;

        const onIdChangeHnd = (e: any) => {
            setId(e.target.value)
        }

        const onReferenceChangeHnd = (e: any) => {
            setReference(e.target.value)
        }

        const onPriceChangeHnd = (e: any) => {
            setPrice(e.target.value)
        }

    return( 
    <div className="form-container">
    <div>
        <h3>Ajout Article</h3>
    </div>
    <form>
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
            <input type="text" value={price} onChange={onPriceChangeHnd} />
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