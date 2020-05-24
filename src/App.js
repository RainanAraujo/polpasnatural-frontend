import React from "react";
import "./App.css";
import { AppBar, makeStyles, createMuiTheme, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import LogoP from "../src/img/logop.svg";
import LogoFooter from "../src/img/logofooter.svg";
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
    backgroundColor: "#fff",
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
    fontSize: "3.5rem",
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
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
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
                  elevation={0}
                  className={classes.appBar}
                >
                  <Grid className="gridContainer" container>
                    <Grid
                      style={{
                        height: "10vh",
                        width: "100%",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 30,
                      }}
                    >
                      <img
                        src={LogoP}
                        style={{ height: "60%", paddingLeft: 10 }}
                      />
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
                  Nossas polpas
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
            <Grid className={classes.footerContent}>
              <Grid
                style={{
                  width: "70%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img src={LogoFooter} />
              </Grid>
              <text
                style={{
                  fontSize: 16,
                  marginTop: 5,
                  textAlign: "center",
                  lineHeight: 1.7,
                }}
              >
                contato@polpasnatural.com.br
              </text>
            </Grid>
          </Grid>
        </div>
      </body>
    </div>
  );
}

export default App;
