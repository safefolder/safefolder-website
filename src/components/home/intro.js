import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const EmailSubscribeForm = ({ status, message, onValidated }) => {
  let email;

  const [loading, setLoading] = React.useState(false); 
  const [color, setColor] = React.useState('primary'); 
  const [endIcon, setEndIcon] = React.useState(null);

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div class="mx-auto text-center">
    <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
          noValidate
          autoComplete="off"
        >
          {status === "sending" && <div class="mx-auto" style={{ color: "blue" }}>Sending...</div>}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              class="mx-auto" 
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "green" }} 
              class="mx-auto"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <TextField 
            required
            id="input_email" 
            label="Email" 
            variant="outlined" 
            inputRef={node => (email = node)} 
            className="sf_form_control"
            helperText="Subscribe to our Newsletter to receive updates"
          />
          <Button 
            id="subscribe-button"
            variant="contained" 
            startIcon={<Icon baseClassName="fas" className="fa-envelope" sx={{ fontSize: 30 }} />}
            sx={{'height': '3.5rem'}} 
            onClick={submit}
            loading={loading}
            color={color}
            endIcon={endIcon}
          >
            Subscribe Now!
          </Button>
    </Box>
    </div>
  );
};

export const Intro = () => {

  const [loading, setLoading] = React.useState(false); 
  const [color, setColor] = React.useState('primary'); 
  const [endIcon, setEndIcon] = React.useState(null); 

  function handleSubscribeClick() { 
      setLoading(true); 
      // Call to API to subscribe to Newsletter
      setLoading(false); 
      setEndIcon(<Icon baseClassName="fas" className="fa-check" sx={{ fontSize: 30 }} />);
      setColor('success');
      // alert('clicked');
  } 

  const mc_form_url = "https://jorgealegre.us14.list-manage.com/subscribe/post?u=b15ae75dda7c1210a1bc39873&amp;id=8fd3ff5d35&amp;f_id=009945e5f0";

return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>

<a id="top" />

<h1 style={{"display": "none"}}>Safefolder - Secure Your Data Your Way</h1>

<h2 class="text-center">What is Safefolder?</h2>

<h3 class="text-center mx-auto pt-3 pb-3" style={{"font-weight": "300", "max-width": "700px"}}>
  Safefolder is a platform for data and applications to address security issues on the Internet.
</h3>

<p class="text-center pt-2">
  Watch the video below to learn how we will address the top three issues of privacy and security online:
</p>

<div class="mx-auto text-center mt-5 d-none d-sm-block">
<div class="embed-responsive embed-responsive-16by9">

<iframe 
class="embed-responsive-item sf-video-item"
src="https://www.youtube.com/embed/lr3hjVT6w4E?si=zXx2f6wcX6RUMzXO" 
title="YouTube video player" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>

</div>
</div>

<div class="mx-auto text-center mt-5 d-xl-none d-lg-none d-md-none d-sm-none">
<div class="embed-responsive embed-responsive-16by9">

<iframe 
width="315"
height="560"
class="embed-responsive-item"
src="https://youtube.com/embed/_oBPowlRaBA?si=enfRS1cXLhp03shh" 
title="YouTube video player" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>

</div>
</div>

<br />

<MailchimpSubscribe
           url={mc_form_url}
           render={({ subscribe, status, message }) => (
             <EmailSubscribeForm
               status={status}
               message={message}
               onValidated={formData => subscribe(formData)}
             />
           )}
         />

</div>
}
