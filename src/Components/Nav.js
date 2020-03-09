import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import cookie from "cookie";
import checkAuth from '../Components/checkAuth'
const Nav = () => {

  const logout = e => {
    // e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000";
    window.location.replace("/login");
  };
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
      
        <Button color="inherit" component={Link} to="/">
          Listings
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Add Listings
        </Button>
        {checkAuth() ? (
          <Button color="inherit" onClick={() => logout()}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
