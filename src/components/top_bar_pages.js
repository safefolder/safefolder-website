import * as React from "react";
import logo from "../images/sf_logo.png";

export const TopBarPages = () => {
    return <nav class="navbar sticky-top navbar-expand-lg sf-tb" style={{background: "#eee"}}>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img class="logo" src={logo} alt="Safefolder" style={{"cursor": "pointer"}} />
        </a>
        <button class="navbar-toggler hvr-bounce-to-bottom collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" data-toggle="collapse" data-target=".navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav me-auto mb-2 mb-lg-0" style={{'background': '#eee'}}>
                <li class="nav-item">
                    <a class="nav-link active sf-tb-item" aria-current="page" href="/"><i class="fa-solid fa-house"></i> Home</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
}
