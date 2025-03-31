import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHub from '@mui/icons-material/GitHub';

const Faq = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">
    
    <a id="faq"><h2 class="text-center">FAQ</h2></a>

    <h4 class="text-center sf-subhead">We answer your questions.</h4>

    <div class="accordion mt-3" id="accordionFAQ">

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQOne" aria-expanded="false" aria-controls="collapseQOne">
                1. How do you measure hours of work?
            </button>
            </h2>
            <div id="collapseQOne" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Hours are approximate. At the end of the quarter, we review the work done in the quarter, around 100 hours of product
                development.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ2" aria-expanded="false" aria-controls="collapseQ2">
                2. NFT storage is off-chain or on-chain?
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ3" aria-expanded="false" aria-controls="collapseQ3">
                3. How is the process of requesting to be a contributor?
            </button>
            </h2>
            <div id="collapseQ3" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                First, we review your application. If you want to participate in the product, we check your code on GitHub and 
                your comments about your software development skills. If you request a repost, we check for engagement on your
                social accounts and get back to you. We will send you an email message for further clarification and also for you
                to ask us questions you may have. When you are part of the team at the end of the quarter, we will send you your NFTs
                at the Eth address provided.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ4" aria-expanded="false" aria-controls="collapseQ4">
                4. Will you refund my money if I purchase a spot (NFT) and later change my mind?
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
                5. When will you publish the final release dates of the product?
            </button>
            </h2>
            <div id="collapseQ5" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                We expect to have a clear picture of release dates in the first quarter of 2026 once all 2025 work related to the backend
                has been completed. We will then review the back-end software left to do and estimate release dates 2026 for the
                testnet and beta releases, pre-releases, and the final release and what features will be included.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ6" aria-expanded="false" aria-controls="collapseQ6">
                6. My personal data is all over the net. Why does it matter now to secure it?
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ7" aria-expanded="false" aria-controls="collapseQ7">
                7. Will you provide a solution to websites such as blogs and other sites?
            </button>
            </h2>
            <div id="collapseQ7" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                Public websites like blogs and other web pages without user accounts and user data will not be implemented
                in Safefolder since the platform cannot provide value there. They will continue to operate as they are now, and there
                are no plans to offer a solution for those.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ8" aria-expanded="false" aria-controls="collapseQ8">
                8. How do you solve the situation where a company has a big database and wants to use that in Safefolder?
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
                9. How do you provide a solution for a company that already has a database and wants to move to Safefolder?
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
                10. Will I be able to share data in my SafeBox?
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
                11. What is the fee for purchasing items in the Marketplace?
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
                12. Is there any cost associated with customer support?
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ13" aria-expanded="false" aria-controls="collapseQ13">
                13. What happens if I stop being a contributor?
            </button>
            </h2>
            <div id="collapseQ13" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                You will not lose Bootstrapper status if you no longer want to be a contributor. That is when we move
                into a new phase; then, you will benefit from the 3x1 offer, getting new spots just by us entering the explorer phase. But
                the more quarters you contribute, the more spots you will earn.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ14" aria-expanded="false" aria-controls="collapseQ14">
                14. What if I want to host your open-source software myself?
            </button>
            </h2>
            <div id="collapseQ14" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                If you want to do your own hosting, you can deploy all our software running on the cloud into your
                own cloud infrastructure. We will have an NFT minting service, "Self Hosting," to mint all the certificates you need
                issued by Safefolder. You will need to own one spot. The cost will be minimal, as it is related to the cost of minting 
                the NFTs, and you can get as many as you need for your hosting. The only exception is our Marketplace, which cannot be 
                hosted, so there is only one place to purchase services and data apps.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ15" aria-expanded="false" aria-controls="collapseQ15">
                15. How is the flow of work being a product contributor?
            </button>
            </h2>
            <div id="collapseQ15" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                You would request to be a contributor. We will review your application, check your LinkedIn and GitHub, and reply. If selected, 
                you would join one of our teams working on features for the first release. We start with a business requirements and 
                functional analysis document. We will create a team once we have that document for all the work. 
                The document does not include technical details, just the requirements and functionality, so you have details on what needs 
                to be implemented. The teams discuss the technical side to have freedom on the best way and strategy to implement the features.

            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ16" aria-expanded="false" aria-controls="collapseQ16">
                16. If I earn 15 spots as a Bootstrapper, how will we move into the Explorer phase?
            </button>
            </h2>
            <div id="collapseQ16" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                When we move to the Explorer phase, you will have 30 spots, 15+15.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ17" aria-expanded="false" aria-controls="collapseQ17">
                17. What happens if you change the conditions?
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
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ18" aria-expanded="false" aria-controls="collapseQ18">
                18. What if I only contribute one quarter as Bootstrapper?
            </button>
            </h2>
            <div id="collapseQ18" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                You would earn the spots for that quarter that you can use or rent.
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQ19" aria-expanded="false" aria-controls="collapseQ19">
                19. Are marketplace site apps open source?
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
                20. Is access to the Marketplace open for free users?
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