import React from "react";
import "./navbar.css";
import menutoggle from "../botão/botao"
import logoGif from "./UmirrorLogoGif.gif"

function NavBar (){
    return(
        <nav className="Nav">
            <a href="/">
            <img height="50" width="100" src={logoGif} alt="logo"/></a>
            <div className="toggle" onMouseOver={menutoggle}/>
        </nav>
    )
}

export default NavBar