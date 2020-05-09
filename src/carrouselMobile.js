import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Grid, Button } from '@material-ui/core';
import pactAcai from "../src/img/pactAcai.png"
import pactAcerola from "../src/img/pactAcerola.png"
import pactCaja from "../src/img/pactCaja.png"
import pactCupuacu from "../src/img/pactCupuacu.png"
import pactGoiaba from "../src/img/pactGoiaba.png"
import pactMaracuja from "../src/img/pactMaracuja.png"
import pactTamarindo from "../src/img/pactTamarindo.png"
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
export default function Carrousel() {


    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} >
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
                    <Grid style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginLeft: 30,
                        marginRight: 30
                    }}

                        justify="space-around">

                        <ButtonBack style={{
                            backgroundColor: "#f2b705",
                            borderRadius: 50,

                        }}>
                            <LeftCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
                        </ButtonBack>
                        <Slider>
                            <Slide index={0} >
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around" >
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>ACEROLA</text>
                                            <img src={pactAcerola} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>

                                    </Grid>
                                </Grid>
                            </Slide>
                            <Slide index={1} >
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around" >

                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30,

                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>MARACUJÁ</text>
                                            <img src={pactMaracuja} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>
                                    </Grid>
                                </Grid>
                            </Slide>
                            <Slide index={3} >
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around" >
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>GOIABA</text>
                                            <img src={pactGoiaba} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>
                                    </Grid>

                                </Grid>
                            </Slide>
                            <Slide index={4}>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around">
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>CAJÁ</text>
                                            <img src={pactCaja} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>

                                    </Grid>
                                </Grid>
                            </Slide>
                            <Slide index={5}>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around">
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>

                                        <Grid style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            marginBottom: 30
                                        }}>
                                            <Grid
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "#fff",
                                                    flexDirection: "column",
                                                    margin: 10,
                                                    height: 300,
                                                    marginBottom: 20,
                                                    paddingTop: 10,
                                                    borderRadius: 30
                                                }}
                                            >
                                                <text style={{ fontSize: "30px", color: "#5a9216" }}>AÇAÍ</text>
                                                <img src={pactAcai} style={{ width: 250 }} />
                                            </Grid>
                                            <Button style={{
                                                backgroundColor: "#F2B705",
                                                position: "absolute",
                                                marginTop: 145,
                                                width: 250,
                                                borderRadius: 50
                                            }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Slide>
                            <Slide index={6}>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around">
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>CUPUAÇU</text>
                                            <img src={pactCupuacu} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>
                                    </Grid>

                                </Grid>
                            </Slide>
                            <Slide index={7}>
                                <Grid style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "static"
                                }}
                                    justify="space-around">
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        marginBottom: 30
                                    }}>
                                        <Grid
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "#fff",
                                                flexDirection: "column",
                                                margin: 10,
                                                height: 300,
                                                marginBottom: 20,
                                                paddingTop: 10,
                                                borderRadius: 30
                                            }}
                                        >
                                            <text style={{ fontSize: "30px", color: "#5a9216" }}>TAMARINDO</text>
                                            <img src={pactTamarindo} style={{ width: 250 }} />
                                        </Grid>
                                        <Button style={{
                                            backgroundColor: "#F2B705",
                                            position: "absolute",
                                            marginTop: 145,
                                            width: 250,
                                            borderRadius: 50
                                        }}><text style={{ color: "#b91400", fontSize: 25 }}>BENEFÍCIOS</text></Button>
                                    </Grid>


                                </Grid>
                            </Slide>
                        </Slider>



                        <ButtonNext style={{
                            backgroundColor: "#f2b705",
                            borderRadius: 50,
                        }}>
                            <RightCircleOutlined style={{ fontSize: 40, color: "#fff" }} />
                        </ButtonNext>

                    </Grid>

                </CarouselProvider>
            </div>
        </div>
    )
}
