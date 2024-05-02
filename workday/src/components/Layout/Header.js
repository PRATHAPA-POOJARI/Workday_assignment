// Header.js
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
 TextField
} from "@mui/material";



import MenuIcon from "@mui/icons-material/Menu";

import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{  textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
       
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
    
      </Typography>
      <Divider />
     
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#00BFFF" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
              style={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            
            </Typography>
           
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>

      
    </>
  );
};

export default Header;
 