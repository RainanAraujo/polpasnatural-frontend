import React, { useEffect, useState } from "react";
import { Skeleton } from "@material-ui/lab";
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
import CarrouselBaners from "./carrouselBaners";
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

  div1: {
    backgroundColor: "#f2b705",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  window.onload = Alert("CARREGADA");
  1;
  var scrollInicio = function () {
    window.scrollTo(0, 0);
  };

  var scrollContato = function () {
    window.scrollTo(0, 2000);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function ComponentSkeleton(props) {
    return (
      <Grid
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
        justify="center"
      >
        <Skeleton
          variant={props.variant}
          height={props.height}
          width={props.width}
        />
      </Grid>
    );
  }

  return (
    <div className="App">
      <header></header>

      <body>
        <div>
          <div>
            <div className={classes.grow}>
              <ThemeProvider theme={theme}>
                <AppBar
                  elevation={3}
                  className={classes.appBar}
                  position="fixed"
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
                      {loading && (
                        <ComponentSkeleton
                          variant={"rect"}
                          width={63}
                          height={54}
                        />
                      )}
                      {!loading && (
                        <img
                          src={LogoP}
                          style={{ height: "60%", paddingRight: 10 }}
                        />
                      )}
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
                            {loading && (
                              <ComponentSkeleton
                                variant={"text"}
                                width={76}
                                height={45}
                              />
                            )}
                            {!loading && (
                              <text
                                style={{
                                  fontSize: "2.6rem",
                                }}
                              >
                                INÍCIO
                              </text>
                            )}
                          </Button>
                          <Button>
                            {loading && (
                              <ComponentSkeleton
                                variant={"text"}
                                width={182}
                                height={45}
                              />
                            )}
                            {!loading && (
                              <text
                                style={{
                                  fontSize: "2.6rem",
                                }}
                              >
                                CONHEÇA-NOS
                              </text>
                            )}
                          </Button>
                          <Button onClick={scrollContato}>
                            {loading && (
                              <ComponentSkeleton
                                variant={"text"}
                                width={117}
                                height={45}
                              />
                            )}
                            {!loading && (
                              <text
                                style={{
                                  fontSize: "2.6rem",
                                }}
                              >
                                CONTATO
                              </text>
                            )}
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid className="gridMenuButtons">
                        <Button
                          href="https://api.whatsapp.com/send?phone=+5599988125040&text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20polpas!"
                          style={{
                            backgroundColor: "#F2B705",
                            paddingLeft: 40,
                            paddingRight: 40,
                            borderRadius: 70,
                            marginRight: 10,
                          }}
                        >
                          {loading && (
                            <ComponentSkeleton
                              variant={"text"}
                              width={192}
                              height={40}
                            />
                          )}
                          {!loading && (
                            <text
                              style={{ color: "#bf0413", fontSize: "2.3rem" }}
                            >
                              FAÇA SEU PEDIDO
                            </text>
                          )}
                        </Button>
                        <IconButton
                          href="https://www.instagram.com/polpafrutanatural/"
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          {loading && (
                            <ComponentSkeleton
                              variant={"rect"}
                              width={20}
                              height={20}
                            />
                          )}
                          {!loading && (
                            <InstagramOutlined
                              style={{ fontSize: 20, color: "#bf0413" }}
                            />
                          )}
                        </IconButton>
                        <IconButton
                          href=""
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          {loading && (
                            <ComponentSkeleton
                              variant={"rect"}
                              width={20}
                              height={20}
                            />
                          )}
                          {!loading && (
                            <WhatsAppOutlined
                              style={{ fontSize: 20, color: "#bf0413" }}
                            />
                          )}
                        </IconButton>
                        <IconButton
                          href=""
                          style={{
                            backgroundColor: "#F2B705",
                            marginRight: 20,
                          }}
                        >
                          {loading && (
                            <ComponentSkeleton
                              variant={"rect"}
                              width={20}
                              height={20}
                            />
                          )}
                          {!loading && (
                            <FacebookOutlined
                              style={{ fontSize: 20, color: "#bf0413" }}
                            />
                          )}
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
                        {loading && (
                          <ComponentSkeleton
                            variant={"text"}
                            width={126}
                            height={26}
                          />
                        )}
                        {!loading && (
                          <text
                            style={{ color: "#bf0413", fontSize: "1.5rem" }}
                          >
                            FAÇA SEU PEDIDO
                          </text>
                        )}
                      </Button>
                      <MenuButton />
                    </Grid>
                  </Grid>
                </AppBar>
              </ThemeProvider>
            </div>
            <CarrouselBaners />
            <Grid className={classes.div1}>
              <Grid
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                }}
              >
                {loading && (
                  <ComponentSkeleton
                    variant={"rect"}
                    width={533}
                    height={"40vh"}
                  />
                )}
                {!loading && (
                  <img
                    src={LogoP}
                    style={{ width: "70%", padding: 20, paddingRight: 30 }}
                  />
                )}
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
                  {loading && (
                    <ComponentSkeleton
                      variant={"text"}
                      width={256}
                      height={63}
                    />
                  )}
                  {!loading && (
                    <b className={classes.textDefault}>CONHEÇA-NOS</b>
                  )}
                </Button>
              </Grid>
            </Grid>
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
                {loading && (
                  <ComponentSkeleton variant={"text"} width={283} height={42} />
                )}
                {!loading && (
                  <b className={classes.textDefault} style={{ color: "#fff" }}>
                    NOSSAS POLPAS
                  </b>
                )}
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
                  {loading && (
                    <ComponentSkeleton
                      variant={"rect"}
                      width={581}
                      height={"30vh"}
                    />
                  )}
                  {!loading && <img src={LogoG} style={{ width: "80%" }} />}
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
                {loading && (
                  <ComponentSkeleton variant={"text"} width={112} height={29} />
                )}
                {!loading && (
                  <b
                    style={{ color: "#4b830d", fontSize: 25, marginBottom: 40 }}
                  >
                    CONTATO
                  </b>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={170} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 9,
                      textAlign: "center",
                    }}
                  >
                    AV. Bonfim nº444
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={198} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 9,
                      textAlign: "center",
                    }}
                  >
                    Bairro Augusto Luna
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={157} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 9,
                      textAlign: "center",
                    }}
                  >
                    CEP:657500000
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={202} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 20,
                      textAlign: "center",
                    }}
                  >
                    Esperantinópolis-MA
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={268} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 5,
                      textAlign: "center",
                    }}
                  >
                    <b>Whatsaap:</b> [99]98812 5040
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={262} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 20,
                      textAlign: "center",
                    }}
                  >
                    <b>Whatsaap:</b> [99]99903 0673
                  </text>
                )}
                {loading && (
                  <ComponentSkeleton variant={"text"} width={377} height={25} />
                )}
                {!loading && (
                  <text
                    style={{
                      fontSize: 22,
                      marginBottom: 15,
                      textAlign: "center",
                    }}
                  >
                    <b>E-mail:</b> contato@polpasnatural.com.br
                  </text>
                )}
              </Grid>
            </Grid>
            <text style={{ textAlign: "center", fontSize: "1.6rem" }}>
              Agência KERA © 2020 - Todos os direitos reservados
            </text>
          </Grid>
        </div>
      </body>
    </div>
  );
}

export default App;
