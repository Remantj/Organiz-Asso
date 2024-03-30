import { useState } from "react";
import "../styles/discussion.css";
import ListeMessages from "./ListeMessages.jsx";

function Discussion(props){
    const [liste, setListe] = useState([
        {auteur: "penguin", message: "Salut, ça va ?", date: new Date()},
    ])

/*
    function ajout(e){
        e.preventDefault();
        var msg = document.getElementById("nv_mess");
        var nvTab = [...liste];
        var nvMsg = {auteur: "jean", message: msg.value, date: new Date()};
        nvTab.push(nvMsg);
        setListe(nvTab);
    }
*/
    function ajout(e){
        e.preventDefault();
        var msg = document.getElementById("nv_mess");
        var nvMsg = {auteur: "jean", message: msg.value, date: new Date()};
        
        // Mettre à jour l'état en utilisant une fonction pour garantir l'accès à la dernière version de la liste
        setListe(prevListe => [...prevListe, nvMsg]);
    
        // Faites défiler vers le bas après l'ajout du nouveau message
        setTimeout(() => {
            var listeMessages = document.querySelector('.listeMessages');
            listeMessages.scrollTop = listeMessages.scrollHeight;
        }, 0);
    
        // Effacer le contenu du champ de texte après l'ajout du message
        msg.value = "";
    }

    return (<>
        <div className="discussion">
            <div className="discuss">
                <h2 className="titreDiscuss">{props.id}</h2> 
                <ListeMessages liste={liste} updateProfil={props.updateProfil} />


                <form action="" method="POST" className="form_contenu1">
                    <label htmlFor="nv_mess">Nouveau Message</label>
                    <textarea id="nv_mess" rows="3" cols="40"></textarea>
                    <button onClick={ajout} className="sub_nv_mess">Envoyer</button>
                </form>
            </div>
            <div className="retour" onClick={props.retour}>
                <button >Retour &rarr;</button>
                
            </div>
        </div>
</>)
}

export default Discussion;