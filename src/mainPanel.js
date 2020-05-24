import React from "react";
import delivery from "./img/delivery.svg";
import { makeStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#f2b705",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#f2b705",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingBottom: 50,
      paddingTop: 70,
    },
  },
  textPanel: {
    marginTop: 20,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
  },
  text: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#bf0413",
    lineHeight: 1.6,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: "2rem",
      color: "#bf0413",
      lineHeight: 1.6,
      width: "50%",
    },
  },
  image: {
    width: 300,
    [theme.breakpoints.up("md")]: {
      width: 500,
    },
  },
}));

export default function MainPanel() {
  const classes = useStyles();
  function SendButton() {
    return (
      <Button
        href="https://api.whatsapp.com/send?phone=+5599988125040&text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20polpas!"
        style={{
          backgroundColor: "#bf0413",
          borderRadius: 10,
          marginRight: 10,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <text style={{ color: "#ffffff", fontSize: "2.3rem" }}>
          FAÇA SEU PEDIDO
        </text>
      </Button>
    );
  }
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.textPanel}>
          <b style={{ fontSize: "3.5rem", color: "#bf0413", marginBottom: 15 }}>
            DEIXAREMOS EM SUA CASA!
          </b>
          <text className={classes.text}>
            A melhor polpa em pronta entrega para Esperantinópolis e região.
            Peça já sua Polpa de Frutas Natural!
          </text>
          <Grid style={{ marginTop: 40 }}>
            <SendButton />
          </Grid>
        </Grid>
        <Grid>
          <img src={delivery} className={classes.image} />
        </Grid>
      </Grid>
    </>
  );
}
