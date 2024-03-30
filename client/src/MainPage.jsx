import { useState } from "react";
import SignUp from "./components/SignUp.jsx";
//import NavigationPanel from "./components/NavigationPanel.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import {idContext} from "./components/useId.jsx";
//import Logout from "./Logout.jsx";

function MainPage() {

  const [isConnected, setConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState("Login");
  const [ident, setIdent] = useState("");

  function getConnected(){
    setConnected(true);
    setCurrentPage("Home");
  }

  function setLogout(){
    setConnected(false);
    setCurrentPage("Login");
  }

  function modifId(identifiant){
    setIdent(identifiant);
  }


  var page = undefined;
  if (currentPage === "Login"){
    page = <Login getConnected={getConnected} setCurrentPage={setCurrentPage} modifId={modifId}/>;
  }
  else
    if (currentPage === "SignUp"){
      page = <SignUp setLogout={setLogout}/>;
    }
    else
      if (currentPage === "Home"){
        page = <Home setLogout={setLogout}/>;
      }
  
  return (
    <>
      <idContext.Provider value={ident}>
        {page}
      </idContext.Provider>
    </>
  );
}

// <NavigationPanel login={getConnected} logout={setLogout}isConnected={isConnected} setCurrentPage={setCurrentPage} />

export default MainPage;
