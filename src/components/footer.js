import * as React from "react";
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return <div class="container-fluid sf-section" style={{"background": "#000000"}}>
    <div class="fluid-container mx-auto text-center pt-4 pb-2">
    
    <span class="sf-foot-line">
        <i class="fa-solid fa-lock"></i> Secure Your Data Your Way</span>

    
    <p class="sf-foot-icons">
        <a href="https://www.youtube.com/@safefolder-vid" target="_blank">
            <IconButton aria-label="delete" size="large" style={{"background": "#aaa"}}>
                <YouTubeIcon fontSize="inherit" />
            </IconButton>
        </a>

    </p>

    <p class="sf-foot-copy">
        Copyright &copy; 2025 Jorge Alegre Vilches. All rights reserved.
    </p>

    <p class="sf-foot-legal">
        <a href="/legal/terms/">Terms</a> | 
        <a href="/legal/privacy/" style={{"margin-left": "5px"}}>Privacy</a>
    </p>

    </div></div>
}