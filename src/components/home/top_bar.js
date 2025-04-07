import * as React from "react";
import { useRef } from "react";
import logo from "../../images/sf_logo.png";

export const TopBar = () => {

    const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }

    return <nav class="navbar sticky-top navbar-expand-lg sf-tb" style={{background: "#eee"}}>
    <div class="container-fluid">
        <a class="navbar-brand" href="#" onClick={collapseNav}>
        <img class="logo" src={logo} alt="Safefolder" style={{"cursor": "pointer"}} />
        </a>
        <button 
            ref={navButton}
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div 
            ref={linksContainerRef}
            class="collapse navbar-collapse" 
            data-toggle="collapse" 
            data-target=".navbar-collapse" 
            id="navbarSupportedContent"
        >
            <ul class="nav navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{'background': '#eee'}}>
            </ul>
        </div>
    </div>
    </nav>
}
