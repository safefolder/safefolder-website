import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

const Plans = () => {
    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">
    
    <h2 class="text-center">Subscription Plans</h2>

    <h4 class="text-center sf-subhead">Plans for every need, from FREE to corporate needs.</h4>

    <StaticImage 
        src="../../images/plans.jpg" 
        alt="Spots" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <div class="card-group" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">FREE</h5>
            <ul>
                <li class="card-text">SafeBox Free.</li>
                <li class="card-text">Encrypted data</li>
                <li class="card-text">Private local workspace</li>
                <li class="card-text">Local channels</li>
                <li class="card-text">Inbox messaging</li>
                <li class="card-text">Access to Marketplace</li>
                <li class="card-text">Receive shared files</li>
                <li class="card-text">•	No limit on local storage</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <ul>
                <li class="card-text">All in Free</li>
                <li class="card-text">Personal directory data</li>
                <li class="card-text">Personal shared workspace</li>
                <li class="card-text">Sync your devices</li>
                <li class="card-text">Share files</li>
                <li class="card-text">1 backup copy</li>
                <li class="card-text">50 GB storage</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Pro</h5>
            <ul>
                <li class="card-text">All in Basic</li>
                <li class="card-text">Organizations</li>
                <li class="card-text">Secure directory for employees</li>
                <li class="card-text">Publish data apps</li>
                <li class="card-text">2 backup copies</li>
                <li class="card-text">300 GB storage</li>
            </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Premium</h5>
            <ul>
                <li class="card-text">All in Pro</li>
                <li class="card-text">Secure directory for employees and users</li>
                <li class="card-text">Virtual desktop in our cloud for employees and users</li>
                <li class="card-text">Publish service apps</li>
                <li class="card-text">3 backup copies</li>
                <li class="card-text">1 TB storage</li>
            </ul>
            </div>
        </div>        
    </div>

    <p><b>Note</b>: Features are subject to change as we move the application to the first release.</p>

    </div></div>
}

export default Plans;