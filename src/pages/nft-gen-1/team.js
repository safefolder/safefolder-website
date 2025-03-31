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
    let product_email, product_linkedin, product_github, product_eth_address, product_city, product_comments;

    const [loading, setLoading] = React.useState(false); 
    const [color, setColor] = React.useState('primary'); 
    const [endIcon, setEndIcon] = React.useState(null);

    const [product_role, setRole] = React.useState('Rust');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const submit = () =>
        product_email &&
        product_email.value.indexOf("@") > -1 &&
        onValidated({
            PROROLE: product_role,
            EMAIL: product_email.value,
            ETHADDRESS: product_eth_address.value,
            LINKEDIN: product_linkedin.value,
            GITHUB: product_github.value,
            CITY: product_city.value,
            COMMENTS: product_comments.value,
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
                value={product_role}
                label="Role"
                onChange={handleChange}
                className="sf_form_control"
                style={{"max-width": "250px"}}
            >
                <MenuItem value="Rust">Rust</MenuItem>
                <MenuItem value="React">React & JS</MenuItem>
                <MenuItem value="Contracts">Smart Contracts</MenuItem>
            </Select>
        </FormControl>
          <TextField 
            required
            id="product_input_email" 
            label="Email" 
            variant="outlined" 
            inputRef={node => (product_email = node)} 
            helperText="Your email address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="product_input_ethaddress" 
            label="Eth Address" 
            variant="outlined" 
            inputRef={node => (product_eth_address = node)} 
            helperText="Your Ethereum address"
            className="sf_form_control"
          /><br />
          <TextField 
            required
            id="product_input_linkedin" 
            label="LinkedIn" 
            variant="outlined" 
            inputRef={node => (product_linkedin = node)} 
            helperText="Your LinkedIn profile page"
            className="sf_form_control"
          />
          <TextField 
            required
            id="product_input_github" 
            label="GitHub" 
            variant="outlined" 
            inputRef={node => (product_github = node)} 
            helperText="Your GitHub profile page"
            className="sf_form_control"
          />
          <TextField 
            id="product_input_city" 
            label="City" 
            variant="outlined" 
            inputRef={node => (product_city = node)} 
            helperText="Your City"
            className="sf_form_control"
          />
          <TextField
            id="product_comments"
            label="Comments"
            multiline
            maxRows={6}
            inputRef={node => (product_comments = node)} 
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
            className="sf_form_control"
          >
            Send
          </Button>
    </Box>
    </div>
  );
};

export const RepostRequestForm = ({ status, message, onValidated }) => {
    let repost_email, repost_linkedin, repost_eth_address, repost_social, repost_city, repost_comments;

    const [loading, setLoading] = React.useState(false); 
    const [color, setColor] = React.useState('primary'); 
    const [endIcon, setEndIcon] = React.useState(null);

    const submit = () =>
      repost_email &&
      repost_email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: repost_email.value,
            ETHADDRESS: repost_eth_address.value,
            LINKEDIN: repost_linkedin.value,
            MERGE3: repost_social.value,
            CITY: repost_city.value,
            COMMENTS: repost_comments.value,
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
            id="repost_input_email" 
            label="Email" 
            variant="outlined" 
            inputRef={node => (repost_email = node)} 
            helperText="Your email address"
            className="sf_form_control"
          />
          <TextField 
            required
            id="repost_input_ethaddress" 
            label="Eth Address" 
            variant="outlined" 
            inputRef={node => (repost_eth_address = node)} 
            helperText="Your Ethereum address"
            className="sf_form_control"
          />
          <TextField 
            id="repost_input_linkedin" 
            label="LinkedIn" 
            variant="outlined" 
            inputRef={node => (repost_linkedin = node)} 
            helperText="Your LinkedIn profile page"
            className="sf_form_control"
          />
          <TextField 
            required 
            id="repost_input_social" 
            label="Social Accounts" 
            multiline
            variant="outlined" 
            maxRows={6}
            inputRef={node => (repost_social = node)} 
            helperText="Your social accounts, one per line"
            style={{"width": "44rem"}}
            className="sf_form_control"
          />
          <TextField 
            id="repost_input_city" 
            label="City" 
            variant="outlined" 
            inputRef={node => (repost_city = node)} 
            helperText="Your City"
            className="sf_form_control"
          />
          <TextField
            id="repost_comments"
            label="Comments"
            multiline
            maxRows={6}
            inputRef={node => (repost_comments = node)} 
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
            className="sf_form_control"
          >
            Send
          </Button>
    </Box>
    </div>
  );
};


const Team = () => {

    const mc_form_url = "https://jorgealegre.us14.list-manage.com/subscribe/post?u=b15ae75dda7c1210a1bc39873&amp;id=8fd3ff5d35&amp;f_id=008345e5f0";

    return <div class="container-fluid sf-section" style={{"background": "#e5e5e5"}}>
    <div class="container">
    
    <a id="tech_preview"><h2 class="text-center">Team</h2></a>

    <h4 class="text-center sf-subhead">Our team</h4>

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

    </div></div>
}

export default Team;