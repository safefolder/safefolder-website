import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Spots = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">

    
    <a id="spots"><h2 class="text-center">Spots</h2></a>

    <h4 class="text-center sf-subhead">Safefolder's digital property through NFTs</h4>

    <StaticImage 
        src="../../images/spots.jpg" 
        alt="Spots" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <p>Safefolder is divided into Spots. Each spot allows users to enjoy sharing data on the platform with other users and their devices.</p>
    
    <p style={{"text-align": "center"}}><b>1 User = 1 Spot</b></p>
    
    <p>You need a spot to share your data with your devices or others. However, if you only want to use your computer's private 
        workspace, you do not need a subscription or a spot. You can watch our technology preview to learn about these details.</p>
    
    <p>A Spot is a <b>digital property certificate</b> backed by an NFT, being a pass with privileges. It defines 
    all benefits and conditions for usage and 
    shared revenue. When we go into production, uploading and locking an NFT into the platform will allow the creation of spots. 
    Having a spot allows you to join our <b>affiliate network</b> and use one user in shared workspaces with low fees.</p>
    

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">1 User</h5>
            <span style={{"font-size": "1.5rem"}}>$97.00<br/> Revenue up to <b>$336</b> per Year</span>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">5 Users</h5>
            <span style={{"font-size": "1.5rem"}}>$397.00<br/> ($79 per user)<br/> Revenue up to <b>$1,700</b> per Year</span>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">25 Users</h5>
            <span style={{"font-size": "1.5rem"}}>$1,700<br/> ($68 per user)<br/> Revenue up to <b>$8,400</b> per Year</span>
            </div>
        </div>
    </div>

    <StaticImage 
        src="../../images/bootstrapper_25_spots_v1.webp" 
        alt="Safefolder Bootstrapper Certificate 1 User" 
        class="img-fluid rounded d-block center-block mt-5 mx-auto" 
        style={{"max-width": "500px"}}
    />

    </div></div>
}

export default Spots;