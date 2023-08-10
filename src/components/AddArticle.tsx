
type Props = {
    onBackBtnClickHnd : ()  => void
}

const AddArticle = (props : Props) => {
        const { onBackBtnClickHnd } = props
    return <> 
    <div>Ajout Article</div>
    <form>
        <div>
            <label>identifiant</label>
            <input type="text" />
        </div>
        <div>
            <label>référence</label>
            <input type="text" />
        </div>
        <div>
            <label>prix unitaire</label>
            <input type="text" />
        </div>
        <div>
            <input type="button" value="Retour" onClick={onBackBtnClickHnd} />
            <input type="submit" value="Ajouter" />
        </div>
    </form>
    </>;
};

export default AddArticle;