import React from "react";
import { makeStyles, Grid, IconButton } from "@material-ui/core";
import logo from "./img/logo2.svg";
import { InstagramOutlined } from "@ant-design/icons";
const useStyles = makeStyles((theme) => ({
  div1: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#bf0413",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      backgroundColor: "#bf0413",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 50,
      marginTop: 70,
    },
  },
  textPanel: {
    marginTop: 20,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
    },
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    lineHeight: 1.6,
    textAlign: "right",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      color: "#ffffff",
      lineHeight: 1.6,
      textAlign: "right",
      width: "50%",
    },
  },
  image: {
    marginTop: 40,
    width: 300,
    [theme.breakpoints.up("md")]: {
      width: 500,
    },
  },
}));

export default function SecondPanel() {
  const classes = useStyles();
  return (
    <Grid className={classes.div1}>
      <Grid>
        <img src={logo} className={classes.image} />
      </Grid>
      <Grid className={classes.textPanel}>
        <b
          style={{
            fontSize: 35,
            color: "#ffffff",
            marginBottom: 15,
            textAlign: "end",
          }}
        >
          CONHEÇA-NOS
        </b>
        <Grid
          style={{
            display: "flex",
          }}
          justify="flex-end"
        >
          <text className={classes.text}>
            Nossa empresa oferece produtos de qualidade sem a ultilização de
            recursos químicos, que ocasionam problemas de saúde. Trabalhamos com
            objetivo buscar a satisfação de nossos clientes ao provarem O SABOR
            DA FRUTA!
          </text>
        </Grid>

        <Grid
          style={{
            display: "flex",
            alignItems: "right",
            marginTop: 10,
            alignItems: "center",
          }}
          justify="flex-end"
        >
          <IconButton
            href=""
            style={{
              backgroundColor: "#F2B705",
              marginRight: 20,
              width: 50,
              height: 50,
            }}
          >
            <InstagramOutlined style={{ fontSize: 20, color: "#bf0413" }} />
          </IconButton>
          <b
            style={{
              fontSize: 20,
              color: "#ffffff",
            }}
          >
            @polpasfrutanatural
          </b>
        </Grid>
      </Grid>
    </Grid>
  );
}
