import { useState } from "react";
import "../styles/signup.css";

function SignUp(props) {
  
  const [login, setLogin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passOK, setPassOK] = useState(true);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  
  function update(e){
    e.preventDefault();
    setLogin(document.getElementById("login").value);
    setPass1(document.getElementById("password").value);
    setPass2(document.getElementById("verify").value)
    setFirstName(document.getElementById("prenom").value);
    setLastName(document.getElementById("nom").value);
    setPassOK(setPass1 === setPass2);
  }


  
  return (
    <>
      <div id="signin">
        <div>
            <h1>Inscription</h1>
        </div>
        <div>
            <form action='' method='POST'>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom"/>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom"/>
                <label htmlFor="login" className="connexion">Login</label>
                <input type="text" id="login"/>
                <label htmlFor="password" className="connexion">Mot de passe</label>
                <input type="text" id="password"/>
                <label htmlFor="verify" className="connexion">Retapez</label>
                <input type="text" id="verify"/>
                <button className="bouton" onClick={props.setLogout}>Annuler</button>
                <input onClick={update} type="submit" value="Inscription" className="bouton"/>

            </form>
          {passOK ? <p></p>:<p style={{color:"red"}}>Erreur: mots de passe différents</p>}
        </div>
      </div>
    </>
  );
}

export default SignUp;