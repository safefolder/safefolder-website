import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

export const CollaborativeEconomy = () => {
    return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
    <div class="container">
    
    <h2 class="text-center">Collaborative Economy</h2>

    <h4 class="text-center sf-subhead">We grow through collaboration</h4>

    <StaticImage 
        src="../../images/collaborate_economy.jpg" 
        alt="Spots" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <p>Safefolder software is open source. You can contribute as in other open source projects by following the rules of contributing 
        from the repository, based on your needs, or any way you want to.</p>

    <p>We also offer the possibility of gaining Spots by helping us build the product and participating in promoting the concept. If 
        you participate in the product, we request a constant commitment of at least 8 hours per week so we can move forward with the 
        software development needed, measured by quarter, which is around 100 hours per quarter. At the end of a quarter, we share 
        certificates with contributors in the form of credits or certificates, using also a factor for quality and value provided.</p>

    <p>It is one of our core values to <b>grow through collaboration</b>.</p>

    <p>We also value <b>promoting talent through proposals</b>. You can submit proposals to our community in any area, and once approved, 
        others will vote for them. This allows you to stand out as a talented individual. You can submit product, technical, marketing, 
        or sales proposals. Together, we stand.</p>

    <p>You can also collaborate to promote our messages by reposting our social content or helping build a team by proposing members to 
        our community of product builders or promoters. You would gain spots this way, too, that you can monetize.</p>

    </div></div>
}
