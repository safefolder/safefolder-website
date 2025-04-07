import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const Spots = () => {
    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
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

    <p>You can purchase an spot for your use or to rent through our affiliate network.</p>
    
    <p>You can have spots by…</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <Icon baseClassName="fas" className="fa-hand-holding-dollar" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />
            <div class="card-body">
            <h5 class="card-title text-center">Fundraising</h5>
            <p class="card-text mt-3">Purchasing an NFT certificate from Safefolder fundraising.</p>
            </div>
        </div>
        <div class="card">
            <Icon baseClassName="fas" className="fa-dollar-sign" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />    
            <div class="card-body">
            <h5 class="card-title text-center">Rent It</h5>
            <p class="card-text mt-3">Rent a spot by subscribing to a plan when we release our first version.</p>
            </div>
        </div>
        <div class="card">
            <Icon baseClassName="fas" className="fa-hands-holding" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />
            <div class="card-body">
            <h5 class="card-title text-center">Contribute</h5>
            <p class="card-text mt-3">Contribute and be a member of our collaborative economy.</p>
            </div>
        </div>
    </div>

    <StaticImage 
        src="../../images/bootstrapper_1_spot_v1.webp" 
        alt="Safefolder Bootstrapper Certificate 1 User" 
        class="img-fluid rounded d-block center-block mt-5 mx-auto" 
        style={{"max-width": "500px"}}
    />

    </div></div>
}