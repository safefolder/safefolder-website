import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


export const ProductRequestForm = ({ status, message, onValidated }) => {
    let email, linkedin, github, eth_address, comments;

    const [loading, setLoading] = React.useState(false); 
    const [color, setColor] = React.useState('primary'); 
    const [endIcon, setEndIcon] = React.useState(null);

    const [role, setRole] = React.useState('Rust');

    console.log("role: " + role);

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            PROROLE: role,
            EMAIL: email.value,
            ETHADDRESS: eth_address.value,
            LINKEDIN: linkedin.value,
            GITHUB: github.value,
            NOTE: comments.value,
            tags: "40188763,40188770"
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
          <FormControl fullWidth>
            <InputLabel id="product-role-select-label">Product Role</InputLabel>
            <Select
                labelId="product-role-select-label"
                id="product_role"
                defaultValue="Rust" 
                value={role}
                label="Role"
                onChange={handleChange}
                className="sf_form_control"
            >
                <MenuItem value="Rust">Rust</MenuItem>
                <MenuItem value="React">React & JS</MenuItem>
                <MenuItem value="Contracts">Smart Contracts</MenuItem>
            </Select>
        </FormControl>
          <TextField 
            required
            id="input_email" 
            label="Email" 
            variant="outlined" 
            inputRef={node => (email = node)} 
            helperText="Your email address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="input_ethaddress" 
            label="Eth Address" 
            variant="outlined" 
            inputRef={node => (eth_address = node)} 
            helperText="Your Ethereum address"
            className="sf_form_control"
          /><br />
          <TextField 
            required
            id="input_linkedin" 
            label="LinkedIn" 
            variant="outlined" 
            inputRef={node => (linkedin = node)} 
            helperText="Your LinkedIn profile page"
            className="sf_form_control"
          />
          <TextField 
            required
            id="input_github" 
            label="GitHub" 
            variant="outlined" 
            inputRef={node => (github = node)} 
            helperText="Your GitHub profile page"
            className="sf_form_control"
          />
          <TextField
            id="product_comments"
            label="Comments"
            multiline
            maxRows={6}
            inputRef={node => (comments = node)} 
            helperText="Comments of your work"
            style={{"width": "44rem"}}
            className="sf_form_control"
          /><br />
          <Button 
            id="product_send_button"
            variant="contained" 
            endIcon={<Icon baseClassName="fas" className="fa-arrow-right" sx={{ fontSize: 30 }} />}
            sx={{'height': '3.5rem'}} 
            onClick={submit}
            loading={loading}
            color={color}
          >
            Send
          </Button>
    </Box>
    </div>
  );
};

export const RepostRequestForm = ({ status, message, onValidated }) => {
    let email, linkedin, eth_address, social, comments;

    const [loading, setLoading] = React.useState(false); 
    const [color, setColor] = React.useState('primary'); 
    const [endIcon, setEndIcon] = React.useState(null);

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            ETHADDRESS: eth_address.value,
            LINKEDIN: linkedin.value,
            MERGE3: social.value,
            NOTE: comments.value,
            tags: "40188763,40188768"
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
            helperText="Your email address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="input_ethaddress" 
            label="Eth Address" 
            variant="outlined" 
            inputRef={node => (eth_address = node)} 
            helperText="Your Ethereum address"
            className="sf_form_control"
          />
          <TextField 
            id="input_linkedin" 
            label="LinkedIn" 
            variant="outlined" 
            inputRef={node => (linkedin = node)} 
            helperText="Your LinkedIn profile page"
            className="sf_form_control"
          />
          <TextField 
            id="input_social" 
            label="Social Accounts" 
            multiline
            variant="outlined" 
            maxRows={6}
            inputRef={node => (social = node)} 
            helperText="Your social accounts, one per line"
            style={{"width": "44rem"}}
            className="sf_form_control"
          />
          <TextField
            id="repost_comments"
            label="Comments"
            multiline
            maxRows={6}
            inputRef={node => (comments = node)} 
            helperText="Comments"
            style={{"width": "44rem"}}
            className="sf_form_control"
          /><br />
          <Button 
            id="repost_send_button"
            variant="contained" 
            endIcon={<Icon baseClassName="fas" className="fa-arrow-right" sx={{ fontSize: 30 }} />}
            sx={{'height': '3.5rem'}} 
            onClick={submit}
            loading={loading}
            color={color}
          >
            Send
          </Button>
    </Box>
    </div>
  );
};

export const TeamRequestForm = ({ status, message, onValidated }) => {
    let email, linkedin, github, eth_address, comments;

    const [loading, setLoading] = React.useState(false); 
    const [color, setColor] = React.useState('primary'); 
    const [endIcon, setEndIcon] = React.useState(null);

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            ETHADDRESS: eth_address.value,
            LINKEDIN: linkedin.value,
            NOTE: comments.value,
            tags: "40188763,40188769"
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
            helperText="Your email address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="input_ethaddress" 
            label="Eth Address" 
            variant="outlined" 
            inputRef={node => (eth_address = node)} 
            helperText="Your Ethereum address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="input_linkedin" 
            label="LinkedIn" 
            variant="outlined" 
            inputRef={node => (linkedin = node)} 
            helperText="Your LinkedIn profile page"
            className="sf_form_control"
          />
          <TextField
            id="team_comments"
            label="Comments"
            multiline
            maxRows={6}
            inputRef={node => (comments = node)} 
            helperText="Comments of your skills for helping us build the team"
            style={{"width": "44rem"}}
            className="sf_form_control"
          /><br />
          <Button 
            id="product_send_button"
            variant="contained" 
            endIcon={<Icon baseClassName="fas" className="fa-arrow-right" sx={{ fontSize: 30 }} />}
            sx={{'height': '3.5rem'}} 
            onClick={submit}
            loading={loading}
            color={color}
          >
            Send
          </Button>
    </Box>
    </div>
  );
};

export const Team = () => {

    const mc_form_url = "https://jorgealegre.us14.list-manage.com/subscribe/post?u=b15ae75dda7c1210a1bc39873&amp;id=8fd3ff5d35&amp;f_id=008345e5f0";

    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">
    
    <a id="tech_preview"><h2 class="text-center">Team</h2></a>

    <h4 class="text-center sf-subhead">Our community of collaborators and Team members</h4>

    <StaticImage 
        src="../../images/team.jpg" 
        alt="Paradigm Shift" 
        class="img-fluid rounded d-block center-block sf-section-img" 
    />
        
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

    <div class="container text-center">
        <p class="mt-4 mb-4">Request to <b>become part of our team</b>. We will review your application and get you onboard as soon as possible.</p>
    </div>

    <div class="accordion mt-3" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Join the Team Helping on the Product
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">

                <MailchimpSubscribe
                        url={mc_form_url}
                        render={({ subscribe, status, message }) => (
                            <ProductRequestForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                            />
                        )}
                        />

            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Join the Team Helping on Reposting
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">

                <MailchimpSubscribe
                        url={mc_form_url}
                        render={({ subscribe, status, message }) => (
                            <RepostRequestForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                            />
                        )}
                        />

            </div>
            </div>
        </div>
    </div>

    <div class="mx-auto text-center mt-3">

        <Button 
            variant="contained" 
            href="/legal/product-contributors/" 
            sx={{'height': '3.5rem', 'mt': 2, 'mb': 3, 'border-radius': 30, 'pl': 5, 'pr': 5}} 
            startIcon={<PeopleOutlineIcon />}
        >
        Contributor Agreement
        </Button>

    </div>

    </div></div>
}
