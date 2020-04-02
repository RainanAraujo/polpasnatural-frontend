import React from 'react';
import './App.css';
import { AppBar, Drawer, makeStyles, createMuiTheme, IconButton, Button, Grid, MenuItem, Menu, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/styles';
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined } from '@ant-design/icons';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LogoP from "../src/img/iconp.png"
import LogoG from "../src/img/logog.png"
import Slide1 from "../src/img/slide.png"
import Slide2 from "../src/img/slide2.png"
import MenuButton from "./draw"
import Carrousel from "./carrousel"

const theme = createMuiTheme({

  palette: {
    primary: {
      main: "#b91400"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffffff',
    },
  },
});

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#bf0413",
    alignItems: "center",
    background: 'transparent',
  },
  grow: {
    flexGrow: 1,
  },
  containerDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: "row",
      alignItems: "center",
    },
  },
  textDefault: {
    fontSize: "30px",
    [theme.breakpoints.up('md')]: {
      fontSize: "50px"
    },
  },

  div1: {
    backgroundColor: "#f2b705",
    width: "100%",
    display: 'flex',
    flexDirection: "row",
    alignItems: "center"
  },
  div2: {
    backgroundColor: "#bf0413",
    width: "100%",

  },
  div3: {
    backgroundColor: "#f2b705",
    display: 'flex',
    flexDirection: "row",
    alignItems: "center"

  },
  footer: {
    background: '#fff',
  },
  sectionMobile: {
    display: 'flex',
    flexGrow: 1,
    alignItems: "center",

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}));

function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <header >
      </header>

      <body>
        <div>
          <div>
            <div className={classes.grow} >
              <ThemeProvider theme={theme}>
                <AppBar elevation={3} className={classes.appBar} position="fixed" >
                  <Grid className="gridContainer" container >
                    <Grid style={{
                      height: "90px",
                      width: "160px",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      marginRight: 30
                    }}>
                      <img src={LogoP} style={{ height: 60, width: 104, paddingRight: 20 }} />
                    </Grid>
                    <Grid className={classes.containerDesktop} justify="space-between">
                      <Grid style={{
                        height: "100%",
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <Grid className="gridMenuButtonsText">
                          <Button >
                            <text>INÍCIO</text>
                          </Button>
                          <Button>
                            <text >CONHEÇA-NOS</text>
                          </Button>
                          <Button>
                            <text>POLPAS</text>
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid className="gridMenuButtons">
                        <Button style={{ backgroundColor: "#F2B705", paddingLeft: 40, paddingRight: 40, borderRadius: 70 }}>
                          <text style={{ color: "#bf0413", fontSize: 23 }}>FAÇA SEU PEDIDO</text>
                        </Button>
                        <IconButton style={{ backgroundColor: "#F2B705" }} >
                          <InstagramOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                        </IconButton>
                        <IconButton style={{ backgroundColor: "#F2B705" }}>
                          <WhatsAppOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                        </IconButton>
                        <IconButton style={{ backgroundColor: "#F2B705" }}>
                          <FacebookOutlined style={{ fontSize: 20, color: "#bf0413" }} />
                        </IconButton>

                      </Grid>
                    </Grid>
                    <Grid className={classes.sectionMobile} justify="space-around">
                      <Button style={{
                        backgroundColor: "#F2B705",
                        borderRadius: 10,
                        alignItems: "center",

                      }}>
                        <text style={{ color: "#bf0413", fontSize: 20 }}>FAÇA SEU PEDIDO</text>
                      </Button>
                      <MenuButton />
                    </Grid>
                  </Grid>
                </AppBar>
              </ThemeProvider>
            </div>
            <div style={{ height: 80 }}>

            </div>
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
                  totalSlides={2}
                  isPlaying={true}
                  playDirection={"forward"}
                  interval={3500}
                  infinite={true}
                  isIntrinsicHeight={true}
                >
                  <Slider>
                    <Slide index={0} >
                      <Image src={Slide1} />
                    </Slide>
                    <Slide index={1}>
                      <Image src={Slide2} />
                    </Slide>
                  </Slider>
                </CarouselProvider>
              </div>
            </div>
            <Grid className={classes.div1}>
              <Grid style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff"
              }} >

                <img src={LogoP} style={{ width: "70%", padding: 20, paddingRight: 30 }} />
              </Grid>
              <Grid
                style={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button style={{ color: "#fff", borderRadius: 20 }}>
                  <b className={classes.textDefault}>CONHEÇA-NOS</b>
                </Button>
              </Grid>

            </Grid>
            <div className={classes.div2}>
              <Grid style={{
                height: 160,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
              }}>
                <b className={classes.textDefault} style={{ color: "#fff" }}>NOSSAS POLPAS</b>
              </Grid>

              <Carrousel />
            </div>
            <div className={classes.div3}>
              <Grid style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                display: "flex"
              }}>

              </Grid>
              <Grid style={{

                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
              }}>

              </Grid>
            </div>
          </div>
          <Grid style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column  ",
            backgroundColor: "#fff",
            paddingBottom: 10

          }}>
            <Grid style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              padding: 60
            }}
              justify="space-around">
              <Grid>
                <img src={LogoG} style={{ width: 500 }} />
              </Grid>
              <Grid style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}>
                <b style={{ color: "#4b830d", fontSize: 25, marginBottom: 40 }}>CONTATO</b>
                <text style={{ fontSize: 22, marginBottom: 9 }}>AV. Bonfim nº444</text>
                <text style={{ fontSize: 22, marginBottom: 9 }}>Bairro Augusto Luna</text>
                <text style={{ fontSize: 22, marginBottom: 9 }}>CEP:657500000</text>
                <text style={{ fontSize: 22, marginBottom: 20 }}>Esperantinópolis-MA</text>
                <text style={{ fontSize: 22, marginBottom: 5 }}><b>Whatsaap:</b> [99]98812 5040</text>
                <text style={{ fontSize: 22, marginBottom: 20 }}><b>Whatsaap:</b> [99]99903 0673</text>
                <text style={{ fontSize: 22, marginBottom: 15 }}><b>E-mail:</b> contato@polpasnatural.com.br</text>

              </Grid>
            </Grid>
            <text>Agência KERA © 2020 - Todos os direitos reservados</text>
          </Grid>

        </div>
      </body>
    </div >

  );
}

export default App;
