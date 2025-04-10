import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHub from '@mui/icons-material/GitHub';

const Faq = () => {
    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">
    
    <a id="faq"><h2 class="text-center">FAQ</h2></a>

    <h4 class="text-center sf-subhead">We answer your questions.</h4>

    <div class="accordion mt-3" id="accordionFAQ">

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ2" aria-expanded="false" aria-controls="collapseQ2">
                1. NFT storage is off-chain or on-chain?
            </button>
            </h2>
            <div id="collapseQ2" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Our NFTs store Spot conditions like shared revenue and other benefits on the NFT metadata. We store
                the metadata on IPFS.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ4" aria-expanded="false" aria-controls="collapseQ4">
                2. Will you refund my money if I purchase a spot (NFT) and later change my mind?
            </button>
            </h2>
            <div id="collapseQ4" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                We will not give your money back. You can resell the NFT in the NFT marketplaces as they are not locked from us and
                you can freely sell the certificates you own.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ5" aria-expanded="false" aria-controls="collapseQ5">
                3. When will you publish the final release dates of the product?
            </button>
            </h2>
            <div id="collapseQ5" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                We expect to have a clear picture of release dates during 2026, once all 2025 work related to the backend
                has been completed. We will then review the back-end software left to do and estimate release dates for the
                testnet and beta releases, pre-releases, and the final release and what features will be included.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ6" aria-expanded="false" aria-controls="collapseQ6">
                4. My personal data is all over the net. Why does it matter now to secure it?
            </button>
            </h2>
            <div id="collapseQ6" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Yes, I see your point. We got used to using insecure software like Email for a long time, and also our personal
                data is all over; companies sharing that and being shared by APIs. We believe it is good to have a reset and start
                again with a secure system like Safefolder to control who and how is accessing your data.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ8" aria-expanded="false" aria-controls="collapseQ8">
                5. How do you solve the situation where a company has a big database and wants to use that in Safefolder?
            </button>
            </h2>
            <div id="collapseQ8" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Big databases like product catalogs unrelated to users will be kept in our cloud. We call those shared folders. There
                might be local caching features, but since it is not data related to a user, it is not stored with privacy and
                security in mind. Companies will be able to access those through an API.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ9" aria-expanded="false" aria-controls="collapseQ9">
                6. How do you provide a solution for a company that already has a database and wants to move to Safefolder?
            </button>
            </h2>
            <div id="collapseQ9" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                In these cases, the premium plan offers a solution of migrating app databases in a way that data related to the app and
                the company is stored in our cloud, and user-related data for the folders and the SafeBox are kept in a virtual desktop
                in our cloud that companies can access through an API. This way, they do not need to migrate their apps; they can only
                migrate the database to move it to a more advanced database system regarding data privacy and performance. We offer
                a more effective data solution.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ10" aria-expanded="false" aria-controls="collapseQ10">
                7. Will I be able to share data in my SafeBox?
            </button>
            </h2>
            <div id="collapseQ10" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Yes, as we do with the private key related to spaces that are shared and saved in the SafeBox, you can securely share
                secrets with other users. You will have control over history when they use those secrets and data, and you can revoke their rights. 
                In 2026, we will share when this feature is available.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ11" aria-expanded="false" aria-controls="collapseQ11">
                8. What is the fee for purchasing items in the Marketplace?
            </button>
            </h2>
            <div id="collapseQ11" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                There is a fee of 5% for all purchases in the Marketplace.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ12" aria-expanded="false" aria-controls="collapseQ12">
                9. Is there any cost associated with customer support?
            </button>
            </h2>
            <div id="collapseQ12" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Subscriptions get 20 tickets per year, including our maintenance fee, which covers cloud and support
                costs. There is an additional fee per 10 support tickets for customers needing more assistance.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ17" aria-expanded="false" aria-controls="collapseQ17">
                10. What happens if you change the conditions?
            </button>
            </h2>
            <div id="collapseQ17" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                The conditions on your NFT will be granted even if we change them, as they are a contract that we must honor. Changes in 
                conditions only apply to new NFTs minted.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ19" aria-expanded="false" aria-controls="collapseQ19">
                11. Are marketplace site apps open source?
            </button>
            </h2>
            <div id="collapseQ19" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Site apps are, either way, open source and private license.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ20" aria-expanded="false" aria-controls="collapseQ20">
                12. Is access to the Marketplace open for free users?
            </button>
            </h2>
            <div id="collapseQ20" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Yes.
            </div>
            </div>
        </div>

    </div>


    </div></div>
}

export default Faq;