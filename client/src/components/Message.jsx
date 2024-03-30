import { useRef, useEffect } from "react";
import "../styles/message.css";

function Message(props){

    const msg = useRef(null);
    const txt = useRef(null);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    
    useEffect(() => {
        msg.current.style.position = "relative";
        if (props.auteur == "penguin"){
            msg.current.style.left = "50%";
        }
        else{
            msg.current.style.left = "8%";
            txt.current.style.backgroundColor = "blue";
        }
    }, [txt]);

    
    const d = props.date.toLocaleDateString('fr-FR', options);
    return (<>
        <div className="message" ref={msg}>
            <p id="auteur">{props.auteur}</p>
            <div className="texte" ref={txt}>
                <p>{props.message}</p>
            </div>
            <p id="date">{d}</p>
        </div>
    </>)
}

export default Message;