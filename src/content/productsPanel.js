import React from "react";
import { Grid } from "@material-ui/core";
import "../css/main.css";
import CarrouselDesktop from "./panelsComponents/carrouselDesktop";
import CarrouselMobile from "./panelsComponents/carrouselMobile";

export default function Footer() {
  return (
    <>
      <Grid className="productsPanelContainer">
        <b>Nossas polpas</b>
      </Grid>
      <Grid className="carouselDesktop">
        <CarrouselDesktop />
      </Grid>
      <Grid className="carouselMobile">
        <CarrouselMobile />
      </Grid>
    </>
  );
}
