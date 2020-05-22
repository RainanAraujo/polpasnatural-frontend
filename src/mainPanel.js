import React from "react";
import delivery from "./img/delivery.png";
import { Grid, Button } from "@material-ui/core";
export default function MainPanel() {
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
      <Grid
        style={{
          backgroundColor: "#f2b705",
          height: "75vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Grid
          style={{ width: "50%", display: "flex", flexDirection: "column" }}
        >
          <b style={{ fontSize: 35, color: "#bf0413", marginBottom: 15 }}>
            VAMOS DEIXAR <br /> EM SUA CASA
          </b>
          <text style={{ fontSize: 20, color: "#bf0413", lineHeight: 1.6 }}>
            A melhor polpa em pronta entrega
            <br />
            para Esperantinópolis e região.
            <br />
            Peça já sua Polpa de Frutas Natural
          </text>
          <Grid style={{ marginTop: 40 }}>
            <SendButton />
          </Grid>
        </Grid>
        <Grid>
          <img src={delivery} />
        </Grid>
      </Grid>
    </>
  );
}
