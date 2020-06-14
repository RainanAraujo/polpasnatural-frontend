import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "../../css/main.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Grid, Button } from "@material-ui/core";
import pactAcai from "../../img/pactAcai.svg";
import pactAcerola from "../../img/pactAcerola.svg";
import pactCaja from "../../img/pactCaja.svg";
import pactCupuacu from "../../img/pactCupuacu.svg";
import pactGoiaba from "../../img/pactGoiaba.svg";
import pactMaracuja from "../../img/pactMaracuja.svg";
import pactTamarindo from "../../img/pactTamarindo.svg";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

export default function Carrousel() {
  function SlideComponent(props) {
    return (
      <Grid className="containerGroupSlide">
        <Grid className="containerSingleSlide">
          <text style={{ fontSize: 20 }}>{props.NameTitle}</text>

          <img src={props.NameImage} style={{ width: 250 }} alt="Card" />
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
          <text style={{ fontSize: 20 }}>BENEFÍCIOS</text>
        </Button>
      </Grid>
    );
  }

  return (
    <Grid style={{ width: "100%" }}>
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
        <Grid className="containerMain">
          <ButtonBack className="buttonsNextAndBack">
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
              <SlideComponent NameTitle="TAMARINDO" NameImage={pactTamarindo} />
            </Slide>
          </Slider>

          <ButtonNext className="buttonsNextAndBack">
            <RightCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
          </ButtonNext>
        </Grid>
      </CarouselProvider>
    </Grid>
  );
}
