import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    fontSize: 28,
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      marginLeft: -10,
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 8,
    width: "15%",
    minWidth: 80,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TEMPLATE HOMEPAGE
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              position="fixed"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// TO DO:

// 1. (DONE) FIX POSITION OF BAR TITLE
//     (DONE) create theme.breakpoint to shrink font
//
// 2. (DONE) CENTER CONTENT ON SMALLER RESOLUTIONS
//     (DONE) create a theme with new breakpoints for smaller screens

// 3. (DONE) WORK ON FONT SIZE/COLOR FOR APPBAR

// 4. CREATE A FOOTER WITH CONTACT INFO/LINKS

// 5. ADD BANNER WITH BACKGROUND IMAGE AT TOP OF PAGE
// 6. ADD NAVBAR BUTTONS
//      add breakpoint to hide on small screens
// 7. WORK ON DROP DOWN MENU
// 8. ADD ELEMENTS FOR LINKS VIA ROUTER
