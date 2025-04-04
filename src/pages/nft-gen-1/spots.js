import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Spots = () => {
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

            <p>We have three phases: Bootstrapper, Explorer, and Rocketeer. We are in the bootstrapping phase, building the products and services 
        to secure your data. When we deliver the first release into production, we will move into the Explorer phase, adapting to market needs. 
        After reaching the product-market fit, we will move into the Growth phase, becoming Rocketeers</p>

    <p style={{"text-align": "center"}}><b>Bootstrapper -{">"} Explorer -{">"} Rocketeer</b></p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <Icon baseClassName="fas" className="fa-wrench" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />
            <div class="card-body">
            <h5 class="card-title text-center">Bootstrapper</h5>
            <p class="card-text mt-3">Phase when we kick start and finish the product.</p>
            </div>
        </div>
        <div class="card">
            <Icon baseClassName="fas" className="fa-person-walking" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />
            <div class="card-body">
            <h5 class="card-title text-center">Explorer</h5>
            <p class="card-text mt-3">Phase when we publish the first version and we reach product-market fit.</p>
            </div>
        </div>
        <div class="card">
            <Icon baseClassName="fas" className="fa-rocket" sx={{ fontSize: 90, mx: 'auto', color: '#4281D7', width: 160, my: 1 }} />
            <div class="card-body">
            <h5 class="card-title text-center">Rocketeer</h5>
            <p class="card-text mt-3">Phase when we start to grow with a validated product.</p>
            </div>
        </div>
    </div>

    <h3 class="text-center">Purchase Certificate for Your Use</h3>
    
    <p>This case is when you purchase a digital property certificate for yourself or a group of users in your community or organization.</p>

    <p>When we publish the public release in 2026, you will upload and lock the NFT certificate for your use. Depending on your chosen 
        plan, you only need to pay a low <b>maintenance fee from $1.35 to $6 per user per month</b>. You can use your certificate for a Basic, Pro, or 
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

    <a id="affiliates" />
    <h3 class="text-center">Purchase Certificate for Affiliate Network</h3>
    
    <p>In the bootstrapping phase, you get interesting benefits and better return on investment than in the other phases.
        You can choose to use the spots you purchase or rent them. You can use a set of spots and rent the rest through the affiliate
        network.</p>

    <p>You <b>promote your spot</b> to quickly find a user and start receiving your shared revenue through your contacts or social 
        network accounts.</p>

    <p>All phases allow you to use it in any plan or rent it. You can offer any three plans: Basic, Pro, and Premium.</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Bootstrapper</h5>
            <ul>
                <li class="card-text">Your net Income: 70%.</li>
                <li class="card-text"><b>3x1</b>: One extra spot when in explorer phase, and another one when in rocketeer phase.</li>
                <li class="card-text">Rent rewards 15% per year (1.5 credits).</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Explorer</h5>
            <ul>
                <li class="card-text">Your net Income: 60%.</li>
                <li class="card-text">Rent rewards 15% per year (1.5 credits).</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Rocketeer</h5>
            <ul>
                <li class="card-text">Your net Income: 50%.</li>
                <li class="card-text">Rent rewards 7% per year (0.7 credits).</li>
            </ul>
            </div>
        </div>
    </div>

    <p style={{"text-align": "center"}}><b>10 Credits = 1 Spot</b></p>

    <p>We would be grateful if you would support us economically. Your help would allow us to continue working to make the Internet safer 
        for you and others.</p>

    <p>Enrolling as a Bootstrapper allows you to have a <b>shared revenue maximum of up to $336 per year (premium account) for a lifetime </b> 
    per user account. You can choose to purchase one user, 10 users, or a pack of 25 users.</p>
    
    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">1 User</h5>
            <span style={{"font-size": "1.7rem"}}>$97.00</span>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">5 Users</h5>
            <span style={{"font-size": "1.7rem"}}>$397.00<br/> ($79 per user)</span>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">25 Users</h5>
            <span style={{"font-size": "1.7rem"}}>$1,700<br/> ($68 per user)</span>
            </div>
        </div>
    </div>

    <p>This price point provides a good return on investment (ROI) for the number of users you desire.</p>

    <p>You will be able to purchase a spot from NFT marketplaces like OpenSea. Signup for the newsletter to receive updates on our 
        next fundraising of spots.</p>

    <StaticImage 
        src="../../images/bootstrapper_1_spot_v1.webp" 
        alt="Safefolder Bootstrapper Certificate 1 User" 
        class="img-fluid rounded d-block center-block mt-5 mx-auto" 
        style={{"max-width": "500px"}}
    />

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