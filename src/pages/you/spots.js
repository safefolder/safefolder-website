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
    Having a spot allows you to use one user in shared workspaces with low fees.</p>

    <p>When we publish the public release in 2026, you will upload and lock the NFT certificate for your use. Depending on your chosen 
        plan, you only need to pay a low <b>maintenance fee from $1.35 to $6 per month</b>. You can use your certificate for a Basic, Pro, or 
        Premium user account. The maintenance fee also includes up to <b>20 support tickets per year</b>.</p>

    <p>You can purchase when we release campaigns in OpenSea.</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <ul>
                <li class="card-text">$1.35 / Month</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Pro</h5>
            <ul>
                <li class="card-text">$3.00 / Month</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Premium</h5>
            <ul>
                <li class="card-text">$6.00 / Month</li>
            </ul>
            </div>
        </div>
    </div>

    <p>Big savinsg of more than 80% lifetime when you purchase our NFT for <b>$97.00</b>. These are the prices of our monthly subscriptions:</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <ul>
                <li class="card-text">$9.00 / Month</li>
                <li class="card-text">$108.00 / Year</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Pro</h5>
            <ul>
                <li class="card-text">$20.00 / Month</li>
                <li class="card-text">$240.00 / Year</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Premium</h5>
            <ul>
                <li class="card-text">$40.00 / Month</li>
                <li class="card-text">$480.00 / Year</li>
            </ul>
            </div>
        </div>
    </div>

    <StaticImage 
        src="../../images/bootstrapper_1_spot_v1.webp" 
        alt="Safefolder Bootstrapper Certificate 1 User" 
        class="img-fluid rounded d-block center-block mt-5 mx-auto" 
        style={{"max-width": "500px"}}
    />

<div class="mx-auto text-center mt-3">
    <Button 
        variant="contained" 
        href="https://opensea.io/collection/sf-spot-bootstrapper" 
        sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
        startIcon={<ShoppingBasketIcon />}
        target="_blank"
    >
        Buy Your Spot @ OpenSea
    </Button>
</div>

<p class="text-center" style={{"font-weight": "800", "font-size": "130%"}}>
    Hurry up; the sale ends on April 25th!
</p>

<p class="mt-3" style={{"font-size": "70%", "color": "#838282"}}><b>Disclaimer:</b> Investing in products in development has associated risks of possible delays and problems. This site offers 
    detailed information on what is left to build, and you can also check our data repository at GitHub for more details on our software. 
    We will do our best to deliver and move into production at the end of 2026. We will publish more detailed dates in the first quarter 
    of 2026. If you purchase now and do not want to continue later, you can exit this Bootstrapping support by selling your NFT in the 
    NFT marketplaces.</p>

    <p style={{"font-size": "70%", "color": "#838282"}}>The shared revenue in our affiliate network is applied when you have an active subscription with a user. If the user cancels the 
        subscription, there will be some time of wait until you make a sell for your spot through your promotion activities.
        By purchasing at OpenSea you agree to our Spot purchase agreement.
    </p>

    <p style={{"font-size": "70%", "color": "#838282"}}>
        By purchasing at OpenSea you agree to our Spot purchase agreement.
    </p>

    <div class="mx-auto text-center mt-3">
        <Button 
            color="gray" 
            variant="contained" 
            href="https://safefolder.app/legal/spot-purchase/" 
            sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
            startIcon={<PeopleOutlineIcon />}
            target="_blank"
        >
            Spot Purchase Agreement
        </Button>
    </div>

    </div></div>
}

export default Spots;