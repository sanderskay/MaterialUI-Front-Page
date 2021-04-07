import { Grid } from "@material-ui/core";
import React from "react";
import ContentCard from "./cards";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { CenterFocusStrong, FormatAlignJustify } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 70,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    
    

    [theme.breakpoints.down(399)]: {
      marginLeft: 0
    },
    [theme.breakpoints.between(400,600)]: {
      marginLeft: 30,
      
    },
 
  }
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.mainContainer}
    >
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ContentCard
          title="Test Title"
          content="This is the test content."
          alt="Picture of stars"
          height="150"
          image="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default Content;
