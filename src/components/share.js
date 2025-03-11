import * as React from "react";
import IconButton from '@mui/material/IconButton';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import Share from '@mui/icons-material/IosShare';
import {
    TwitterShareButton, XIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    WhatsappShareButton, WhatsappIcon,
    LinkedinShareButton, LinkedinIcon,
    EmailShareButton, EmailIcon
} from "react-share";

const SafefolderShare = (
    {
        shareUrl,
        shareTitle,
        summary="Check out Safefolder, which provides the tools needed so users have all their data in their devices and controlling who has access to it enhacing privacy and security",
        source="Safefolder",
        hashtag="safefolder",
        hashtags=[hashtag],
        subject="Safefolder - Secure Your Data Your Way",
        body="Checkout Safefolder, which provides the tools needed so users have all their data in their devices and controlling who has access to it enhacing privacy and security"
    }
) => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            <ListItem style={{"margin-top": "10px"}}>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[0].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <TwitterShareButton
                            url={shareUrl}
                            title={shareTitle}
                            hashtags={hashtags}
                        >
                            <XIcon size={32} round />
                        </TwitterShareButton>
                    </ListItemIcon>
                    <ListItemText primary="X" style={{"padding-left": "20px"}} 
                    />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[1].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <FacebookShareButton
                            url={shareUrl}
                            title={shareTitle}
                            hashtag={hashtag}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </ListItemIcon>
                    <ListItemText primary="Facebook" style={{"padding-left": "20px"}} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[2].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <TelegramShareButton
                            url={shareUrl}
                            title={shareTitle}
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                    </ListItemIcon>
                    <ListItemText primary="Telegram" style={{"padding-left": "20px"}} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[3].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <WhatsappShareButton
                            url={shareUrl}
                            title={shareTitle}
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </ListItemIcon>
                    <ListItemText primary="WhatsApp" style={{"padding-left": "20px"}} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[4].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <LinkedinShareButton
                            url={shareUrl}
                            title={shareTitle}
                            summary={summary}
                            source={source}
                        >
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" style={{"padding-left": "20px"}} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton 
                    onClick={(e) => {
                        document.getElementsByClassName("react-share__ShareButton")[5].click();
                    }}>
                    <ListItemIcon style={{"padding-left": "20px"}}>
                        <EmailShareButton
                            subject={subject}
                            body={body}
                        >
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                    </ListItemIcon>
                    <ListItemText primary="Email" style={{"padding-left": "20px"}} />
                </ListItemButton>
            </ListItem>

        </List>
        </Box>
    );

    return <div><IconButton classes="sf-share-icon" aria-label="share" size="large" style={{"background": "#8ABBFE", "position": "fixed", "bottom": "20px", "right": "20px"}}>
        <Share onClick={toggleDrawer(true)} fontSize="inherit" />
    </IconButton>

    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>

    </div>
}

export default SafefolderShare;
