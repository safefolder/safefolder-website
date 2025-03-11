import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHub from '@mui/icons-material/GitHub';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export const Contribute = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">
    
    <a id="contribute"><h2 class="text-center">Contribute</h2></a>

    <h4 class="text-center sf-subhead">We grow through collaboration. We need you. Join our team.</h4>

    <StaticImage 
        src="../../images/contribute.jpg" 
        alt="Contribute" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <p>You can contribute to the product or participate in the promotion of our social content.</p>

    <p>We share certificates at the end of the quarter, where we place the Q&A process. If you do not earn full certificates, 
        we will give you credits that can be exchanged in the next quarter. If you do not want to continue more quarters, you can 
        keep the certificate NFTs and credits and monetize them when we reach production at the end of 2026. Or sell them before 
        production in the NFT marketplaces.</p>
    
    <p style={{"text-align": "center"}}><b>10 Credits = 1 Spot</b></p>

    <p>The first 12 members receive a special certificate reward, the “<b>Distinguished Contributor</b>,” which allows more 
    certificates and credits. We thank you for being an early adopter and joining our team sooner.</p>

            <p class="mt-3">You can occasionally contribute to our open source repository or commit more regularly, and we will recognize you 
                with an award.</p>

            <p>We request that you contribute at least 8 hours per week, measured by quarter, or 100 hours per quarter. At the end 
                of the quarter, we measure the Q&A and send you the reward.</p>

            <p>You will gain credits and certificates as we move into our product phases. If you enter as a Bootstrapper, you will 
                gain more credits and certificates in the Bootstrapping phase than in the Exploring phase.</p>

            <h4>Benefits for Helping With the Product</h4>

            <div class="card-group" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Side Income</h5>
                    <p class="card-text">You get a lifetime side income monthly.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-dollar-sign"> </small> 
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Talent Visibility</h5>
                    <p class="card-text">Boost your career by gaining visibility.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-brain"> </small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Participate in the Next Thing</h5>
                    <p class="card-text">Join a product challenging and participate in a paradigm shift.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-face-grin-wide"> </small>
                    </div>
                </div>
            </div>

            <h4>Benefits for Helping With Distribution</h4>

            <div class="card-group" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Monetize Your Social Network</h5>
                    <p class="card-text">Monetize your social network with the spots you gain today and tomorrow.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-dollar-sign"> </small> 
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Increase Networking</h5>
                    <p class="card-text">Our community can allow you to increase influence and networking.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-handshake"> </small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Side Income</h5>
                    <p class="card-text">Side income on a recurring basis for a lifetime.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-dollar-sign"> </small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Influence</h5>
                    <p class="card-text">Influence on a change for innovation on privacy.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-microphone"> </small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Participate in the Next Thing</h5>
                    <p class="card-text">Join a product challenging and participate in a paradigm shift.</p>
                    </div>
                    <div class="card-footer" style={{"text-align": "center"}}>
                        <small class="text-body-secondary fa fa-lg fa-face-grin-wide"> </small>
                    </div>
                </div>
            </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="rust-tab" data-bs-toggle="tab" data-bs-target="#rust-tab-pane" type="button" role="tab" aria-controls="rust-tab-pane" aria-selected="true">
                Rust
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="react-tab" data-bs-toggle="tab" data-bs-target="#react-tab-pane" type="button" role="tab" aria-controls="react-tab-pane" aria-selected="false">
                React
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contracts-tab" data-bs-toggle="tab" data-bs-target="#contracts-tab-pane" type="button" role="tab" aria-controls="contracts-tab-pane" aria-selected="false">
                Contracts
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="reposters-tab" data-bs-toggle="tab" data-bs-target="#reposters-tab-pane" type="button" role="tab" aria-controls="reposters-tab-pane" aria-selected="false">
                Reposters
            </button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="rust-tab-pane" role="tabpanel" aria-labelledby="rust-tab" tabindex="0">

            <p class="mt-3">We multiply the value by a quality factor from 1.0 to 1.2 and a value factor from 1.0 to 1.5.</p>

            <p>If you are a “<b>Distinguished Contributor</b>” among the first 10 product team members, you will receive 15 spots.</p>

            <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Bootstrapping Phase</h5>
                    <p class="card-text">10 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Explorering Phase</h5>
                    <p class="card-text">4 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Rocketing Phase</h5>
                    <p class="card-text">2 spots per quarter</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="tab-pane fade show" id="react-tab-pane" role="tabpanel" aria-labelledby="react-tab" tabindex="0">

            <p class="mt-3">We multiply the value by a quality factor from 1.0 to 1.2 and a value factor from 1.0 to 1.5.</p>

            <p>If you are a “<b>Distinguished Contributor</b>” among the first 10 product team members, you will receive 12 spots.</p>

            <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Bootstrapping Phase</h5>
                    <p class="card-text">8 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Explorering Phase</h5>
                    <p class="card-text">2.4 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Rocketing Phase</h5>
                    <p class="card-text">1.2 spots per quarter</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="tab-pane fade show" id="contracts-tab-pane" role="tabpanel" aria-labelledby="contracts-tab" tabindex="0">

            <p class="mt-3">We multiply the value by a quality factor from 1.0 to 1.2 and a value factor from 1.0 to 1.5.</p>

            <p>If you are a “<b>Distinguished Contributor</b>” among the first 10 product team members, you will receive 23 spots.</p>

            <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Bootstrapping Phase</h5>
                    <p class="card-text">15 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Explorering Phase</h5>
                    <p class="card-text">5 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Rocketing Phase</h5>
                    <p class="card-text">2.5 spots per quarter</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="tab-pane fade show" id="reposters-tab-pane" role="tabpanel" aria-labelledby="reposters-tab" tabindex="0">

            <p class="mt-3">If you have a social account in X, Facebook, TikTok, or Instagram with more than 1,000 followers, you get two spots 
                per quarter for 3 months or reposting at least four monthly posts. We publish from 3 to 7 posts per week.</p>

            <p>You start with eight spots per quarter if you enter among the first 10 distribution team members being a 
                “<b>Distinguished Contributor</b>.”</p>

            <p>You will receive eight spots if you are a “Distinguished Contributor” among the first 10 product team members.</p>

            <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Bootstrapping Phase</h5>
                    <p class="card-text">5 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Explorering Phase</h5>
                    <p class="card-text">1.5 spots per quarter</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Rocketing Phase</h5>
                    <p class="card-text">1 spots per quarter</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="mx-auto text-center">

        <Button 
            variant="contained" 
            href="/legal/product-contributors/" 
            sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
            startIcon={<PeopleOutlineIcon />}
        >
        Contributor Agreement
        </Button>

        <br />
        <Button 
            variant="contained" 
            href="https://github.com/orgs/safefolder/repositories" 
            target="new" 
            sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
            startIcon={<GitHub />}
        >
        GitHub Repositories
        </Button>

    </div>

    </div></div>
}
