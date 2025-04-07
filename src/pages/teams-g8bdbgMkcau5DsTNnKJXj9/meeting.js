import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Meeting = () => {
    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">

    <h2 class="text-center">Meet with Us</h2>

    <h4 class="text-center sf-subhead">Schedule a meeting with us to learn more</h4>

    <StaticImage 
        src="../../images/plans.jpg" 
        alt="Meeting" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />

    <div class="mx-auto text-center mt-3">
    <Button 
        color="primary" 
        variant="contained" 
        href="https://calendly.com/safefolder/meeting" 
        sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
        startIcon={<PeopleOutlineIcon />}
        target="_calendly"
    >
        Schedule Meeting @Calendly
    </Button>
    </div>

    </div>

</div>
}

export default Meeting;
