import React from "react";
import "./App.css";
import {
  AppBar,
  makeStyles,
  createMuiTheme,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import LogoP from "../src/img/iconp.png";
import LogoG from "../src/img/logog.png";
import MenuButton from "./draw";
import Carrousel from "./carrousel";
import CarrouselMobile from "./carrouselMobile";
import MainPanel from "./mainPanel";
import SecondPanel from "./secondPanel";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b91400",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#bf0413",
    alignItems: "center",
    background: "transparent",
  },
  grow: {
    flexGrow: 1,
  },
  containerDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
  textDefault: {
    fontSize: "2.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.6rem",
    },
  },

  div2: {
    backgroundColor: "#bf0413",
    width: "100%",
  },
  div3: {
    backgroundColor: "#f2b705",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    background: "#fff",
  },
  sectionMobile: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  footerContent: {
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
    },
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
}));

function App() {
  const classes = useStyles();
  var scrollInicio = function () {
    window.scrollTo(0, 0);
  };

  var scrollContato = function () {
    window.scrollTo(0, 2000);
  };

  return (
    <div className="App">
      <header></header>

      <body>
        <div>
          <div>
            <div className={classes.grow}>
              <ThemeProvider theme={theme}>
                <AppBar
                  position="static"
                  elevation={3}
                  className={classes.appBar}
                >
                  <Grid className="gridContainer" container>
                    <Grid
                      style={{
                        height: "10vh",
                        width: "20%",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 30,
                      }}
                    >
                      <img
                        src={LogoP}
                        style={{ height: "60%", paddingRight: 10 }}
                      />
                    </Grid>
                    <Grid
                      className={classes.containerDesktop}
                      justify="space-between"
                    >
                      <Grid
                        style={{
                          height: "10vh",
                          flexDirection: "row",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid className="gridMenuButtonsText">
                          <Button onClick={scrollInicio}>
                            <text
                              style={{
                                fontSize: "2.6rem",
                              }}
                            >
                              INÍCIO
                            </text>
                          </Button>
                          <Button>
                            <text
                              style={{
                                fontSize: "2.6rem",
                              }}
                            >
                              CONHEÇA-NOS
                            </text>
                          </Button>
                          <Button onClick={scrollContato}>
                            <text
                              style={{
                                fontSize: "2.6rem",
                              }}
                            >
                              CONTATO
                            </text>
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid className="gridMenuButtons">
                        <IconButton
                          href="https://www.instagram.com/polpafrutanatural/"
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          <InstagramOutlined
                            style={{ fontSize: 20, color: "#bf0413" }}
                          />
                        </IconButton>
                        <IconButton
                          href=""
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          <WhatsAppOutlined
                            style={{ fontSize: 20, color: "#bf0413" }}
                          />
                        </IconButton>
                        <IconButton
                          href=""
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          <FacebookOutlined
                            style={{ fontSize: 20, color: "#bf0413" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid
                      className={classes.sectionMobile}
                      justify="space-around"
                    >
                      <Button
                        href="https://api.whatsapp.com/send?phone=+5599988125040&text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20polpas!"
                        style={{
                          backgroundColor: "#F2B705",
                          borderRadius: 10,
                          alignItems: "center",
                          marginRight: 10,
                        }}
                      >
                        <text style={{ color: "#bf0413", fontSize: "1.5rem" }}>
                          FAÇA SEU PEDIDO
                        </text>
                      </Button>
                      <MenuButton />
                    </Grid>
                  </Grid>
                </AppBar>
              </ThemeProvider>
            </div>
            <MainPanel />
            <SecondPanel />
            <div className={classes.div2}>
              <Grid
                style={{
                  height: "13vh",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <b className={classes.textDefault} style={{ color: "#fff" }}>
                  NOSSAS POLPAS
                </b>
              </Grid>
              <Grid className={classes.containerDesktop}>
                <Carrousel />
              </Grid>
              <Grid className={classes.sectionMobile}>
                <CarrouselMobile />
              </Grid>
            </div>
            <div className={classes.div3}>
              <Grid
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  display: "flex",
                }}
              ></Grid>
            </div>
          </div>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#fff",
              paddingBottom: 10,
            }}
          >
            <Grid className={classes.footerContent} justify="space-around">
              <Grid
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: 30,
                }}
              >
                <Grid
                  style={{
                    width: "70%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img src={LogoG} style={{ width: "80%" }} />
                </Grid>
              </Grid>
              <Grid
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 30,
                }}
              >
                <b style={{ color: "#4b830d", fontSize: 25, marginBottom: 40 }}>
                  CONTATO
                </b>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  AV. Bonfim nº444
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  Bairro Augusto Luna
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 9,
                    textAlign: "center",
                  }}
                >
                  CEP:657500000
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 20,
                    textAlign: "center",
                  }}
                >
                  Esperantinópolis-MA
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 5,
                    textAlign: "center",
                  }}
                >
                  <b>Whatsaap:</b> [99]98812 5040
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 20,
                    textAlign: "center",
                  }}
                >
                  <b>Whatsaap:</b> [99]99903 0673
                </text>

                <text
                  style={{
                    fontSize: 22,
                    marginBottom: 15,
                    textAlign: "center",
                  }}
                >
                  <b>E-mail:</b> contato@polpasnatural.com.br
                </text>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </body>
    </div>
  );
}

export default App;
