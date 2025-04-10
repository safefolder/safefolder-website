import * as React from "react";
 import { StaticImage } from "gatsby-plugin-image";
 import Button from '@mui/material/Button';
 import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
 
 const Meeting = () => {
     return <div class="container-fluid sf-section" style={{"background": "#f5f5f5"}}>
     <div class="container">
 
     <a id="meeting"><h2 class="text-center">Meet with Us</h2></a>
 
     <h4 class="text-center sf-subhead">Schedule a meeting with us to learn more</h4>
 
     <StaticImage 
         src="../../images/contributors.jpg" 
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
         Schedule a Meeting
     </Button>
     </div>

     <div class="container text-center">
     <div class="row">
 
     <div class="col sf-team-cols">
         <div class="card sf-team-card">
             <StaticImage 
                 src="../../images/jorge_low_square.png" 
                 alt="Paradigm Shift" 
                 class="img-fluid rounded d-block sf-team-img" 
             />
         <div class="card-body">
             <h5 class="card-title text-center">Jorge <a href="https://www.linkedin.com/in/jorgealegre/" target="new"><i class="fa-brands fa-linkedin"></i></a></h5>
         </div>
         <div class="card-footer" style={{"text-align": "center"}}>
             <small class="text-body-secondary">Founder</small>
         </div>
 
         </div>
     </div>
 
     </div></div>
 
     </div>
 
 </div>
 }
 
 export default Meeting;