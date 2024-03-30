import Message from "./Message.jsx";
import "../styles/listemessages.css";

function ListeMessages(props){

    function affichage() {
        return props.liste.map((elem, index) => (
            <Message key={index} auteur={elem.auteur} message={elem.message} date={elem.date} updateProfil={props.updateProfil} />
        ));
    }

    return (<>
        <div className="listeMessages"> 
            {affichage()}
        </div>
    </>)
}

export default ListeMessages;