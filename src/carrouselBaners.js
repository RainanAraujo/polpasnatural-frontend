import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
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
        <Grid style={{ width: "100%" }}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={2}
            isPlaying={true}
            playDirection={"forward"}
            interval={3500}
            infinite={true}
            isIntrinsicHeight={true}
          >
            <Slider>
              <Slide index={0}>
                <Image src={Slide1} />
              </Slide>
              <Slide index={1}>
                <Image src={Slide2} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </Grid>
      </Grid>
    </>
  );
}
