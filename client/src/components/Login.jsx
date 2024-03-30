import "../styles/login.css";
import { useState } from "react";

function Login({getConnected, setCurrentPage, modifId}){
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function update(){
    setLogin(document.getElementById("login_form").value);
    setPassword(document.getElementById("password").value);
    modifId(document.getElementById("login_form").value);
    getConnected();
  }

  const inscription = () => setCurrentPage("SignUp");
  
  return  <>
      <div id="login">
        <div className="titre">
          <h1>Ouvrir une session</h1>
        </div>
        <div className="form_connexion">
          <form action="" method="POST">
            <label htmlFor="login_form">Login</label>
            <input type="text" id="login_form" />
            <label htmlFor="password">Mot de passe</label>
            <input type="text" id="password" />
            <input type="reset" value="Annuler" className="bouton" />
            <input onClick={update} type="submit" value="Connexion" className="bouton" />
          </form>
        </div>
        <div className="inscription">
          <h2>Vous n'avez pas encore de compte, Inscrivez-vous</h2>
          <button onClick={inscription}>Inscription</button>
        </div>
      </div>
    </>
}

export default Login