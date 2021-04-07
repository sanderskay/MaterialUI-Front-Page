import React from "react";
import SearchAppBar from "./components/appbar";
import { Grid } from "@material-ui/core";
import Content from "./components/Content";
import { CenterFocusStrong } from "@material-ui/icons";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <SearchAppBar />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
