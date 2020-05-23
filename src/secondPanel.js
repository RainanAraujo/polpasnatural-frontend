import React from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";
import logo from "./img/logo2.svg";

const useStyles = makeStyles((theme) => ({
  div1: {
    backgroundColor: "#bf0413",
    height: "75vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 70,
    marginTop: 70,
  },
}));

export default function SecondPanel() {
  const classes = useStyles();
  return (
    <Grid className={classes.div1}>
      <Grid>
        <img src={logo} />
      </Grid>
      <Grid style={{ width: "50%", display: "flex", flexDirection: "column" }}>
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
        <text
          style={{
            fontSize: 20,
            color: "#ffffff",
            lineHeight: 1.6,
            textAlign: "end",
          }}
        >
          Nossa empresa oferece produtos <br />
          de qualidade sem a ultilização de recursos <br />
          químicos, que ocasionam problemas de saúde.
          <br />
          Trabalhamos com objetivo buscar a <br />
          satisfação de nossos clientes ao provavem <br />O SABOR DA FRUTA!
        </text>
      </Grid>
    </Grid>
  );
}
