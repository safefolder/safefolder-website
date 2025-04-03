import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Spots = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">

    
    <a id="spots"><h2 class="text-center">Spots for Your Team</h2></a>

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
    Having a spot allows you to use up to five or twenty five users in shared workspaces with low fees.</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">5 Users</h5>
            <ul>
                <li class="card-text">Up to 5 users, that through the 3x1 will end up being 15 after the 
                    product-market fit.</li>
                    <li class="card-text">More than <b>80% discount</b> over monthly subscriptions.</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">25 Users</h5>
            <ul>
            <li class="card-text">Up to 25 users, that through the 3x1 will end up being 75 after the 
            product-market fit.</li>
            <li class="card-text">More than <b>80% discount</b> over monthly subscriptions.</li>
            </ul>
            </div>
        </div>
    </div>

    </div></div>
}

export default Spots;