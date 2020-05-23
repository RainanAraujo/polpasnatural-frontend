import React, { useEffect, useState } from "react";
import { Skeleton } from "@material-ui/lab";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Grid, Button, makeStyles } from "@material-ui/core";
import pactAcai from "../src/img/pactAcai.png";
import pactAcerola from "../src/img/pactAcerola.png";
import pactCaja from "../src/img/pactCaja.png";
import pactCupuacu from "../src/img/pactCupuacu.png";
import pactGoiaba from "../src/img/pactGoiaba.png";
import pactMaracuja from "../src/img/pactMaracuja.png";
import pactTamarindo from "../src/img/pactTamarindo.png";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

const useStyles = makeStyles({
  ContainerMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ContainerDead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "static",
  },
  ContainerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  ButtonsNextAndBack: {
    backgroundColor: "#f2b705",
    borderRadius: 50,
    border: "none",
    margin: 5,
  },
  ContainerSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    marginBottom: 20,
    paddingTop: 40,
    borderRadius: 30,
    width: "70%",
  },
});

export default function Carrousel() {
  const classes = useStyles();

  function SlideComponent(props) {
    return (
      <Grid className={classes.ContainerMain}>
        <Grid className={classes.ContainerSlide}>
          <text style={{ fontSize: "30px", color: "#5a9216" }}>
            {props.nameTitle}
          </text>

          <img src={props.nameImage} />
        </Grid>
        <Button
          style={{
            backgroundColor: "#F2B705",
            position: "absolute",
            marginTop: 170,
            width: 250,
            borderRadius: 50,
          }}
        >
          <text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text>
        </Button>
      </Grid>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <CarouselProvider
        totalSlides={3}
        isPlaying={true}
        playDirection={"forward"}
        interval={3500}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
          justify="space-around"
        >
          <ButtonBack Grid className={classes.ButtonsNextAndBack}>
            <LeftCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
          </ButtonBack>
          <Slider>
            <Slide index={0}>
              <Grid className={classes.ContainerDead} justify="space-around">
                <Grid className={classes.ContainerChild}>
                  <SlideComponent nameTitle="ACEROLA" nameImage={pactAcerola} />
                  <SlideComponent nameTitle="GOIABA" nameImage={pactGoiaba} />
                  <SlideComponent
                    nameTitle="MARACUJÁ"
                    nameImage={pactMaracuja}
                  />
                </Grid>
              </Grid>
            </Slide>
            <Slide index={1}>
              <Grid className={classes.ContainerMain} justify="space-around">
                <Grid className={classes.ContainerChild}>
                  <SlideComponent nameTitle="AÇAI" nameImage={pactAcai} />
                  <SlideComponent nameTitle="CUPUAÇU" nameImage={pactCupuacu} />
                  <SlideComponent nameTitle="CAJÁ" nameImage={pactCaja} />
                </Grid>
              </Grid>
            </Slide>
            <Slide index={2}>
              <Grid className={classes.ContainerMain} justify="space-around">
                <Grid className={classes.ContainerChild}>
                  <SlideComponent
                    nameTitle="TAMARINDO"
                    nameImage={pactTamarindo}
                  />
                </Grid>
              </Grid>
            </Slide>
          </Slider>
          <ButtonNext Grid className={classes.ButtonsNextAndBack}>
            <RightCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
          </ButtonNext>
        </Grid>
      </CarouselProvider>
    </div>
  );
}
