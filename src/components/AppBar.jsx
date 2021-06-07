import { AppBar,Toolbar,IconButton,Typography,InputBase } from '@material-ui/core';
import React, { Component } from 'react';
import "./appBAr.css";
import "../components/appBAr.css"
import Menu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from '@material-ui/icons/AccountCircle';
import CartIcon from '@material-ui/icons/ShoppingCart';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ViewStreamIcon from '@material-ui/icons/ViewStream';

class AppBarComponent extends Component {
  render() {
    return (
      <div className="App">
         <AppBar id="appbar-header" position="static">
           
           <div id="menu-title">
           <IconButton aria-label="app" color="inherit">
            <Menu />
            </IconButton>
            </div>
                <div id="title">
                <Typography variant="h6"> FundooNotes </Typography>
                </div>
            
            
            <div id="search-div">
              <SearchIcon />
            <InputBase
              placeholder="Search…"
              className="inputRoot inputInput"
            />
          </div>
          
          <div id="menuicon-div">
              <IconButton aria-label="show notes in list or grid" color="inherit">
                  <AutorenewIcon />
              </IconButton>
              
              <IconButton aria-label="show notes in list or grid" color="inherit">
                  <ViewStreamIcon />
              </IconButton>

              <IconButton aria-label="show notes in list or grid" color="inherit">
              <AccountCircle/>
              </IconButton>

          </div>
           
           </AppBar>
      </div>
    );
  }
}

export default AppBarComponent;