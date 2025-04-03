import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import GitHub from '@mui/icons-material/GitHub';
import {EmailSubscribeForm} from './intro';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const TechnologyPreview = () => {

  const [loading, setLoading] = React.useState(false); 
  const [color, setColor] = React.useState('primary'); 
  const [endIcon, setEndIcon] = React.useState(null); 

  function handleSubscribeClick() { 
      setLoading(true); 
      // Call to API to subscribe to Newsletter
      console.log('send API to subscribe...');
      setLoading(false); 
      setEndIcon(<Icon baseClassName="fas" className="fa-check" sx={{ fontSize: 30 }} />);
      setColor('success');
      // alert('clicked');
  } 

  const mc_form_url = "https://jorgealegre.us14.list-manage.com/subscribe/post?u=b15ae75dda7c1210a1bc39873&amp;id=8fd3ff5d35&amp;f_id=009945e5f0";

    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">
    
    <a id="tech_preview"><h2 class="text-center">Technology Preview</h2></a>

    <h4 class="text-center sf-subhead">Jump into the user experience of Safefolder</h4>

    <div class="mx-auto text-center mt-5 mb-3">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe 
            class="embed-responsive-item sf-video-item"
            src="https://www.youtube.com/embed/uK1ARuXs_ME?si=bdMEHhjr6RF2Asm8" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
    </div>

    </div></div>
}

export default TechnologyPreview;