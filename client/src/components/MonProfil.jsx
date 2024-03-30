import "../styles/monprofil.css";
import menu from "../assets/menu.png";

function MonProfil(props){

    function updateProfilDefault(e){
        e.preventDefault();
        props.modifWidth();
        props.updateProfil();
    }

    if (props.expanse == false){
        return (<>
            <div>
                <img className="icon-hamburger" src={menu} alt="icone du menu" onClick={props.modifWidth} />
            </div>
        </>);
    }
    else{
        return (<>
            <div id="aside">
                <div id="infos">
                    <h2>Mon Profil</h2>
                    <p>
                        <span>Pseudo:</span> penguin
                    </p>
                    <p>
                        <span>Nombre de messages envoyés:</span> 5
                    </p>
                    <p>
                        <a href="" onClick={updateProfilDefault}>Gestion de mon Profil</a>
                    </p>
                </div>
                <div className="x" onClick={props.modifWidth}>
                    <p>x</p>
                </div>
            </div>
        </>)
    }

    
}

export default MonProfil;