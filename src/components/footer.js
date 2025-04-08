import * as React from "react";
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const TikTokIcon = ({ color = "#000000" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="30"
        height="30"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

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

         <a href="https://www.linkedin.com/company/safefolder/" target="_blank">
             <IconButton aria-label="delete" size="large" style={{"background": "#aaa", "margin-left": "15px"}}>
                 <LinkedinIcon fontSize="inherit" />
             </IconButton>
         </a>
 
         <a href="https://x.com/safefolder_app" target="_blank">
             <IconButton aria-label="delete" size="large" style={{"background": "#aaa", "margin-left": "15px"}}>
                 <XIcon fontSize="inherit" />
             </IconButton>
         </a>

         <a href="https://www.facebook.com/people/Safefolder/61574937243959/" target="_blank">
             <IconButton aria-label="delete" size="large" style={{"background": "#aaa", "margin-left": "15px"}}>
                 <FacebookIcon fontSize="inherit" />
             </IconButton>
         </a>

         <a href="https://www.instagram.com/safefolder.app/" target="_blank">
             <IconButton aria-label="delete" size="large" style={{"background": "#aaa", "margin-left": "15px"}}>
                 <InstagramIcon fontSize="inherit" />
             </IconButton>
         </a>

         <a href="https://www.tiktok.com/@safefolder.app" target="_blank">
             <IconButton aria-label="delete" size="large" style={{"background": "#aaa", "margin-left": "15px"}}>
                 <TikTokIcon fontSize="inherit" />
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