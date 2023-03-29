import React from 'react'
import {AppBar, IconButton, Toolbar,Box, Typography} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css'
const Header = () => {
  return (
    <Box sx={{}}>
        <AppBar component={'nav'} sx={{backgroundColor: "black"}}>
             <Toolbar>
              <Typography sx={{flexGrow:1}}>My Resturant
                <FastfoodIcon/>
              </Typography>
              <Box sx={{display: {xs:'none',sm:'block'}}}>
                <ul className='navigation-menu'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/menu">Contact</Link>
                  </li>
                  <li>
                    <Link to="/menu">About</Link>
                  </li>
                  <li>
                    <Link to="/menu">Menu</Link>
                  </li>
                </ul>
              </Box>
             </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
