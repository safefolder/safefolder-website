import * as React from "react";
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
    return <div class="container-fluid sf-section" style={{"background": "#000000"}}>
    <div class="fluid-container mx-auto text-center pt-4 pb-2">
    
    <span class="sf-foot-line">
        <i class="fa-solid fa-lock"></i> Secure Your Data Your Way</span>

    <p class="sf-foot-copy">
        Copyright &copy; 2025-Present Jorge Alegre Vilches. All rights reserved.
    </p>

    <p class="sf-foot-legal">
        <a href="https://safefolder.app/legal/terms/" target="_blank">Terms</a> | 
        <a href="https://safefolder.app/legal/privacy/" target="_blank" style={{"margin-left": "5px"}}>Privacy</a>
    </p>

    </div></div>
}

export default Footer;