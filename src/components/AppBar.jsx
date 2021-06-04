import { AppBar,Toolbar,IconButton,Typography,InputBase } from '@material-ui/core';
import React, { Component } from 'react';
import "./appBAr.css";
import "../components/appBAr.css"
import Menu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search"
class AppBarComponent extends Component {
  render() {
    return (
      <div className="App">
         <AppBar id="appbar-header" position="static">
           <Toolbar>
           <IconButton aria-label="app" color="inherit">
            <Menu />
            </IconButton>
            <Typography variant="h6"> FundooNotes </Typography>
            <div id="search">
            <div id="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className="inputRoot inputInput"
            />
          </div>
           </Toolbar>
           </AppBar>
      </div>
    );
  }
}

export default AppBarComponent;