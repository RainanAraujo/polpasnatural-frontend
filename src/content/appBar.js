import React from "react";
import { AppBar, Grid } from "@material-ui/core";
import LogoP from "../img/logop.svg";
import "../css/main.css";

export default function AppBarComponent() {
  return (
    <AppBar position="static" elevation={0}>
      <Grid className="containerAppBar">
        <img
          src={LogoP}
          style={{ height: "60%", paddingLeft: 10 }}
          alt="Logo P"
        />
      </Grid>
    </AppBar>
  );
}
