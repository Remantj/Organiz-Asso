import { useState } from "react";
import "../styles/profil.css";
import ListeMessages from "./ListeMessages.jsx";

function Profil(props){
    const [liste, setListe] = useState([
        {auteur: "penguin", message: "Salut, ça va ?", date: new Date()},
    ]);
    
    return (<>
        <h1 id="h1-profil">Page de Profil</h1>
        <div id="profil">
            <div id="contenu-profil">
                <div className="p-profil">
                    <p>
                        <span>Pseudo:</span> penguin
                    </p>
                    <p>
                        <span>Statut:</span> administrateur
                    </p>
                    <p>
                        <span>Nombre de messages envoyés:</span> 5
                    </p>
                </div>
                <ListeMessages liste={liste} />
            </div>
            <div className="retour" onClick={props.updateProfil}>
                <button >Retour &rarr;</button>
            </div>
        </div>
    </>)
}

export default Profil;