import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

export const ParadigmShift = () => {
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

    </div>

</div>
}