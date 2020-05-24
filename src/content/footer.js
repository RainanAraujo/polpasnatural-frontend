import React from "react";
import { Grid } from "@material-ui/core";
import LogoFooter from "../img/logofooter.svg";
import "../css/main.css";

export default function Footer() {
  return (
    <Grid className="footerContainer">
      <img src={LogoFooter} />
      <text>contato@polpasnatural.com.br</text>
    </Grid>
  );
}
