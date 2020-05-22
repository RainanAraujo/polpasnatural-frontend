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
    position: "static",
  },
  ContainerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 30,
  },
  ButtonsNextAndBack: {
    backgroundColor: "#f2b705",
    borderRadius: 50,
    border: "none",
    margin: 10,
  },
  ContainerSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    margin: 10,
    height: 250,
    width: "70%",
    marginBottom: 20,
    paddingTop: 10,
    borderRadius: 30,
  },
});
export default function Carrousel() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.onloadeddata = setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  function ComponentSkeleton(props) {
    return (
      <Skeleton
        variant={props.variant}
        height={props.height}
        width={props.width}
      />
    );
  }

  function SlideComponent(props) {
    return (
      <Grid className={classes.ContainerChild} justify="space-around">
        <Grid className={classes.ContainerChild}>
          <Grid className={classes.ContainerSlide}>
            {loading && (
              <ComponentSkeleton variant={"text"} width={170} height={24} />
            )}
            {!loading && (
              <text style={{ fontSize: "20px", color: "#5a9216" }}>
                {props.NameTitle}
              </text>
            )}
            {loading && (
              <ComponentSkeleton variant={"rect"} width={250} height={166} />
            )}
            {!loading && <img src={props.NameImage} style={{ width: 250 }} />}
          </Grid>
          <Button
            style={{
              backgroundColor: "#F2B705",
              position: "absolute",
              marginTop: 115,
              width: 200,
              borderRadius: 50,
            }}
          >
            {loading && (
              <ComponentSkeleton variant={"text"} width={112} height={35} />
            )}
            {!loading && (
              <text style={{ color: "#b91400", fontSize: 20 }}>BENEFÍCIOS</text>
            )}
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={30}
          totalSlides={7}
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
            <ButtonBack className={classes.ButtonsNextAndBack}>
              <LeftCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
            </ButtonBack>
            <Slider>
              <Slide index={0}>
                <SlideComponent NameTitle="ACEROLA" NameImage={pactAcerola} />
              </Slide>
              <Slide index={1}>
                <SlideComponent NameTitle="MARACUJÁ" NameImage={pactMaracuja} />
              </Slide>
              <Slide index={3}>
                <SlideComponent NameTitle="GOIABA" NameImage={pactGoiaba} />
              </Slide>
              <Slide index={4}>
                <SlideComponent NameTitle="CAJÁ" NameImage={pactCaja} />
              </Slide>
              <Slide index={5}>
                <SlideComponent NameTitle="AÇAI" NameImage={pactAcai} />
              </Slide>
              <Slide index={6}>
                <SlideComponent NameTitle="CUPUAÇU" NameImage={pactCupuacu} />
              </Slide>
              <Slide index={7}>
                <SlideComponent
                  NameTitle="TAMARINDO"
                  NameImage={pactTamarindo}
                />
              </Slide>
            </Slider>

            <ButtonNext className={classes.ButtonsNextAndBack}>
              <RightCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
            </ButtonNext>
          </Grid>
        </CarouselProvider>
      </div>
    </div>
  );
}
