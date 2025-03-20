import * as React from "react";
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {
    return <div class="container-fluid sf-section" style={{"background": "#000000"}}>
    <div class="fluid-container mx-auto text-center pt-4 pb-2">

    <div class="mx-auto text-center mt-3">
        <Button 
            color="error"
            variant="contained" 
            href="https://safefolder.app" 
            sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
            startIcon={<LanguageIcon />}
            target="_blank"
        >
            Visit safefolder.app
        </Button>
    </div>
    
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