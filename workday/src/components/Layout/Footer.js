import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [socialMedia, setSocialMedia] = useState('');

    const handleDialogOpen = (media) => {
        setOpenDialog(true);
        setSocialMedia(media);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleVisitSocialMedia = () => {
        let url;
        switch (socialMedia) {
            case 'github':
                url = 'https://github.com/PRATHAPA-POOJARI';
                break;
            case 'instagram':
                url = 'https://www.instagram.com/';
                break;
            case 'twitter':
                url = 'https://twitter.com/';
                break;
            case 'youtube':
                url = 'https://www.youtube.com/';
                break;
            default:
                url = '';
        }
        window.open(url, '_blank');
        setOpenDialog(false);
    };

    return (
        <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
            <Box sx={{ 
                textAlign: "center", 
                bgcolor: 'black', 
                color: 'white', 
                p: 1,
                '@media (max-width:800px)': { // Media query defined here
                    p: 0,
                }
            }}>
                <Box sx={{
                    my: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    "& svg": {
                        fontSize: "60px",
                        cursor: "pointer",
                        mx: 2, // Margin on the x-axis
                    },
                    "& svg:hover": {
                        color: "goldenrod",
                        transform: 'translateY(-5px)', // Adjust the direction of transformation
                        transition: 'all 400ms',
                    },
                }}>
                    <InstagramIcon onClick={() => handleDialogOpen('instagram')} />
                    <TwitterIcon onClick={() => handleDialogOpen('twitter')} />
                    <GitHubIcon onClick={() => handleDialogOpen('github')} />
                    <YouTubeIcon onClick={() => handleDialogOpen('youtube')} />
                </Box>
                <Typography variant="h6" sx={{ 
                    "@media (max-width:800px)": { 
                        fontSize: '1rem' 
                    } 
                }}>
                    All Right reserved @copy
                </Typography>
            </Box>

            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Do you want to visit {socialMedia === 'instagram' ? 'Instagram' : socialMedia === 'twitter' ? 'Twitter' : socialMedia === 'youtube' ? 'YouTube' : 'Prathap\'s GitHub account'}?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleVisitSocialMedia}>Yes</Button>
                    <Button onClick={handleDialogClose}>No</Button>
                </DialogActions>
            </Dialog>
        </footer>
    )
}

export default Footer;
