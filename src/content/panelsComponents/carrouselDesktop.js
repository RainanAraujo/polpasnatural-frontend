import React from "react";
import "../../css/main.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
          <text>{props.nameTitle}</text>

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
          <text>BENEFÍCIOS</text>
        </Button>
      </Grid>
    );
  }

  return (
    <Grid style={{ width: "100%" }}>
      <CarouselProvider
        totalSlides={3}
        isPlaying={true}
        playDirection={"forward"}
        interval={3500}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Grid className="containerMain">
          <ButtonBack Grid className="buttonsNextAndBack">
            <LeftCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
          </ButtonBack>
          <Slider>
            <Slide index={0}>
              <Grid className="containerGroupSlide">
                <SlideComponent nameTitle="ACEROLA" nameImage={pactAcerola} />
                <SlideComponent nameTitle="GOIABA" nameImage={pactGoiaba} />
                <SlideComponent nameTitle="MARACUJÁ" nameImage={pactMaracuja} />
              </Grid>
            </Slide>
            <Slide index={1}>
              <Grid className="containerGroupSlide">
                <SlideComponent nameTitle="AÇAI" nameImage={pactAcai} />
                <SlideComponent nameTitle="CUPUAÇU" nameImage={pactCupuacu} />
                <SlideComponent nameTitle="CAJÁ" nameImage={pactCaja} />
              </Grid>
            </Slide>
            <Slide index={2}>
              <Grid className="containerGroupSlide">
                <SlideComponent
                  nameTitle="TAMARINDO"
                  nameImage={pactTamarindo}
                />
              </Grid>
            </Slide>
          </Slider>
          <ButtonNext Grid className="buttonsNextAndBack">
            <RightCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
          </ButtonNext>
        </Grid>
      </CarouselProvider>
    </Grid>
  );
}
