import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

const ParadigmShift = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">

    <h2 class="text-center">Paradigm Shift</h2>

    <h4 class="text-center sf-subhead">Welcome to a new paradigm shift for security and privacy on the net.</h4>

    <StaticImage 
        src="../../images/paradigm_shift.jpg" 
        alt="Paradigm Shift" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <p>Paradigm shifts change the way people work and interact with each other. They allow profound change that is sometimes 
        projected into whole environments.</p>

    <p>Spotify changed how we consume music, moving from paying per song to a subscription that allows us to listen to many songs. 
        The Internet changed the way we buy products by ordering online. Virtualization and virtual machines allowed AWS, Azure, and 
        Google Cloud to exist. Docker changed how we build and deploy applications, making other innovations like Kubernetes possible.</p>

    <p>Paradigm shifts provide some evolution when everything changes and new industries start to emerge. They also give investors a 
        strong competitive advantage.</p>

    <p>We believe that Safefolder is a paradigm shift that changes where data is located for users, from remote web servers and remote 
        database systems to devices near you. This can create a new ecosystem of products and services, being a game changer.</p>

    <p>It may enhance the privacy and security of your data by better controlling all the data connected to you. It’s your data, and 
        you are the boss.</p>

    <p>We will provide value in these important Cybersecurity topics:</p>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">AI and Machine Learning</h5>
            <p class="card-text mt-3">We offer a complete shift on where data is located being much more difficult
                for AI to hack our platform.
            </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">Zero Trust Architecture</h5>
            <p class="card-text mt-3">Our permission system grants permissions when needed and linked to the 
                data and streaming layer of synchronization.
            </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">Cloud Security</h5>
            <p class="card-text mt-3">Software is mostly executed in the local devices, reducing the security risks
                of the cloud. The Cloud is used for backup and streaming.
            </p>
            </div>
        </div>
    </div>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">IoT Vulnerabilities</h5>
            <p class="card-text mt-3">Our core data and services are compatible with IoT devices. We scan for
                vulnerabilities in Rust backed micro-services.
            </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">Phising Attacks</h5>
            <p class="card-text mt-3">We will provide a complete shift for Phising, being one our must-win
                battles providing technology to completely remove the risks.
            </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">Mobile Security</h5>
            <p class="card-text mt-3">Virtual desktops on the cloud will provide better security for the Mobile
                devices in our platform.
            </p>
            </div>
        </div>
    </div>

    <div class="card-group sf-icon-cards" style={{"margin-top": "2rem", "margin-bottom": "2rem"}}>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title text-center">Regulatory and Compliance</h5>
            <p class="card-text mt-3">Our platform provides a technology solution to privacy and compliance. We
                guarantee compliance through technology since we value data ownership for organizations and users.
                It is your data and you should have complete control over it.
            </p>
            </div>
        </div>
    </div>

    <StaticImage 
        src="../../images/IMG_7225.jpg" 
        alt="Paradigm Shift" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    </div>

</div>
}

export default ParadigmShift;
