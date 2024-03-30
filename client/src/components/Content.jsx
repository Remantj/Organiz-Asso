import { useState, useContext } from "react";
import "../styles/content.css";
import Discussion from "./Discussion.jsx";
import {idContext} from "./useId.jsx";


function Content(props){

    const [affichage, setAffichage] = useState([false, ""]);
    const [listDiscuss, setListDiscuss] = useState([
        "Présentation"
    ]);
    const id = useContext(idContext);
    console.log(id);

    function modifAff(e){
        e.preventDefault();
        setAffichage([true, e.target.innerText]);
    }
    function retour(){
        setAffichage([false, ""]);
    }
    function affTitres(){
        return listDiscuss.map((titre) => (
            <li key={titre}>
                <button onClick={modifAff} className="boutonDiscuss">{titre}</button>
            </li>
        ))
    }
    function creerDiscussion(){
        setListDiscuss([...listDiscuss, document.getElementById("nouvDiscuss").value]);
    }

    if (affichage[0]){
        return <Discussion id={affichage[1]} retour={retour} updateProfil={props.updateProfil}/>;
    }
    return (
        <>
            <div className="contenu">
                <h1>Dernières Discussions</h1>
                <ul>
                    {affTitres()}
                </ul>
                <fieldset>
                    <label htmlFor="nouvDiscuss">Créer une nouvelle discussion : </label>
                    <input type="text" id="nouvDiscuss" />
                    <button className="boutonDiscuss" onClick={creerDiscussion}>Créer</button>
                </fieldset>
            </div>
        </>
    );
}

export default Content;
