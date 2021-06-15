import { AppBar, IconButton, Typography, InputBase } from "@material-ui/core";
import React, { Component } from "react";
import "./appBAr.css";
import Menu from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ViewStreamIcon from "@material-ui/icons/ViewStream";

export default function AppBarComponent() {
    return (
      <AppBar id="appbar-header">
        <div id="menu-title">
          <IconButton aria-label="app" color="inherit">
            <Menu />
          </IconButton>
          <div id="title">
            <Typography variant="h6"> FundooNotes </Typography>
          </div>
          <div id="searchbar">
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              className="inputRoot inputInput search-input"
            />
          </div>
        </div>

        <div id="menuicon-div">
          <IconButton aria-label="show notes in list or grid" color="inherit">
            <AutorenewIcon />
          </IconButton>

          <IconButton aria-label="show notes in list or grid" color="inherit">
            <ViewStreamIcon />
          </IconButton>

          <IconButton aria-label="show notes in list or grid" color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </AppBar>
    );
  };
//export default AppBarComponent({setMenuStatus});
