import React from 'react';
import './App.css';
import { AppBar, makeStyles, createMuiTheme, Toolbar, Button, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
    padding: theme.spacing(2.5),
    alignItems: "center",
    background: 'transparent',
    boxShadow: "none"
  },
  grow: {
    flexGrow: 2,
  },

  div2: {
    width: "100%",
    height: 600
  },
  div1: {
    backgroundColor: "#102027",
    width: "100%",
    height: 500
  },
  div3: {
    width: "100%",
    height: 200
  },
  footer: {
    padding: theme.spacing(2),
    alignItems: "center",
    background: '#102027',
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
                <AppBar elevation={3} className={classes.appBar} position="absolute" >
                  <Grid style={{ width: "100%", alignItems: "center" }} container justify="space-between"  >
                    <text style={{ fontSize: "23px" }}> POLPA DE FRUTAS NATURAL</text>
                    <Grid>
                      <InstagramOutlined style={{ fontSize: '25px', margin: "5px" }} />
                      <WhatsAppOutlined style={{ fontSize: '25px', margin: "5px" }} />
                    </Grid>
                  </Grid>

                </AppBar>
              </ThemeProvider>
            </div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={30}
              totalSlides={3}
              isPlaying={true}
              playDirection={"forward"}
              interval={3500}
              infinite={true}
            >
              <Slider>
                <Slide index={0} ><div style={{ height: "100%", width: "100%", backgroundColor: "#fbc02d" }} ></div></Slide>
                <Slide index={1}>< div style={{ height: "100%", width: "100%", backgroundColor: "#000" }} ></div></Slide>
                <Slide index={2}><div style={{ height: "100%", width: "100%", backgroundColor: "#ef5350" }} ></div></Slide>
              </Slider>
            </CarouselProvider>
            <div className={classes.div2}>

            </div>
            <div className={classes.div1}>

            </div>
            <div className={classes.div3}>
              <Grid style={{ width: "100%", alignItems: "center" }} container justify="space-between"  >
                <Grid>
                  <text></text>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.footer}>
            <text style={{ color: "#fff" }}><b>KERA</b> © 2020 - Todos os direitos reservados</text>
          </div>
        </div>
      </body>
    </div >
  );
}

export default App;
