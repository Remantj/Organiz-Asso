import { useState, useRef } from "react";
import "../styles/home.css";
import Header from "./Header.jsx";
import MonProfil from "./MonProfil.jsx";
import Content from "./Content.jsx";
import Profil from "./Profil.jsx";
//import { useState } from "react";

function Home(props){

    const [expanse, setExpanse] = useState(false);
    const [profil, setProfil] = useState(false);

    const aside = useRef(null);
    const contenu = useRef(null);

    function modifWidth(){
        if (expanse == false){
            setExpanse(true);
            aside.current.style.width = "20%";
            aside.current.style.backgroundColor = "gray";
            contenu.current.style.width = "80%";
        }
        else{
            setExpanse(false);
            aside.current.style.width = "10%";
            contenu.current.style.width = "90%";
            aside.current.style.backgroundColor = "white";
        }
    }

    // A modifier pour prendre en compte le profil à afficher et où revenir
    const updateProfil = (() => setProfil(!profil));

    if (profil){
        return (<>
            <div id="home">
                <header className="header">
                    <Header setLogout={props.setLogout}/>
                </header>
                <Profil updateProfil={updateProfil} />
            </div>
        </>)
    }

    return (
        <>
            <div id="home">
                <header className="header">
                    <Header setLogout={props.setLogout}/>
                </header>
                <main>
                    <aside ref={aside}>
                        <MonProfil expanse={expanse} modifWidth={modifWidth} updateProfil={updateProfil} />
                    </aside>
                    <div ref={contenu} className="contenu">
                        <Content updateProfil={updateProfil} />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;