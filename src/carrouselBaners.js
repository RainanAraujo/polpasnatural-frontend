import React from "react";
import Slide1 from "../src/img/slide.png";
import Slide2 from "../src/img/slide2.png";
import { Grid } from "@material-ui/core";
export default function CarrouselBaners() {
  return (
    <>
      <Grid style={{ height: "10vh" }} />

      <Grid
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid style={{ width: "100%" }}></Grid>
      </Grid>
    </>
  );
}
