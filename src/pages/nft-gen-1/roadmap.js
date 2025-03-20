import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHub from '@mui/icons-material/GitHub';

export const Roadmap = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">
    
    <a id="tech_preview"><h2 class="text-center">Roadmap</h2></a>

    <h4 class="text-center sf-subhead">Heading to a safer place on the net</h4>

    <StaticImage 
        src="../../images/roadmap.jpg" 
        alt="Paradigm Shift" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <p>We expect to deliver the product to production in the fourth quarter of 2026.</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">2025 (Back-end)</h5>
            <ul>
                <li class="card-text">Folder database operations.</li>
                <li class="card-text">Data synchronization.</li>
                <li class="card-text">Account creation.</li>
                <li class="card-text">Maintenance for Folders.</li>
                <li class="card-text">API.</li>
                <li class="card-text">Safebox.</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">2026 (Front-end)</h5>
            <ul>
                <li class="card-text">Wallets on back-end.</li>
                <li class="card-text">Marketplace on back-end.</li>
                <li class="card-text">Front-end for the tech preview video.</li>
                <li class="card-text">Testing phase.</li>
            </ul>
            </div>
        </div>
    </div>

        <div class="accordion mt-3" id="roadmapDetails">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRoadOne" aria-expanded="false" aria-controls="collapseRoadOne">
                More details on Roadmap...
            </button>
            </h2>
            <div id="collapseRoadOne" class="accordion-collapse collapse" data-bs-parent="#roadmapDetails">
            <div class="accordion-body">

                <div class="card-group" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Folder database operations</h5>
                        <p class="card-text">Build the update folder database logic and other enhances to the folder data system.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Data Synchronization</h5>
                        <p class="card-text">Synchronize devices connected into a space by message queues from our cloud (MQ).</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Account Creation</h5>
                        <p class="card-text">Create free, basic, pro, and premium accounts and the permission system needed for the tech preview video.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Maintenance for Folders</h5>
                        <p class="card-text">Feature to do maintenance on space folder to change structure and migrate data for the apps.</p>
                        </div>
                    </div>
                </div>

                <div class="card-group" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">API</h5>
                        <p class="card-text">Repository that will keep all API calls for the data subsystem, services, and any tool in 
                            Safefolder. Asynchronous API.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">SafeBox</h5>
                        <p class="card-text">Security of directories, values, and certificates by key pairs of public and private keys. 
                            Sharing files.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Wallets</h5>
                        <p class="card-text">Integrate Ethereum wallet to send your NFT and lock it to create a spot.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Marketplace</h5>
                        <p class="card-text">Sites back-end and front-end. Back-end in rust downloadable services. Front-end using 
                            GatsbyJS or other static JS technologies.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Front-end</h5>
                        <p class="card-text">Build react site as displayed in the tech preview video.</p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>


    <div class="mx-auto text-center">

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
