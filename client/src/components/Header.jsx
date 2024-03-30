import "../styles/header.css";
//import Search from "./Search.jsx";
import logo from "../assets/logo.png";

function Header(props){
    return (
        <>
            <div className="logo">
              <img className="img" src={logo} />
            </div>
            <div className="search">
                <form action="" method="POST" className="search_header">
                    <label htmlFor="search">rechercher</label>
                    <input type="text" id="search" />
                    <label htmlFor ="debut">début</label>
                    <input type="date" id="debut" />
                    <label htmlFor ="fin">fin</label>
                    <input type="date" id="fin" /> 
                    <input type="submit" value="search" />
                </form>
            </div>
            <div className="Déconnexion">
                <button onClick={props.setLogout}>Déconnexion</button>
            </div>
        </>
    );
}

export default Header;