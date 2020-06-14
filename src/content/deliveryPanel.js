import React from "react";
import delivery from "../img/delivery.svg";
import { Grid, Button } from "@material-ui/core";
import "../css/main.css";
export default function MainPanel() {
  const linkWhatsapp =
    "https://api.whatsapp.com/send?phone=+5599984063843&text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20polpas!";
  function SendButton() {
    return (
      <Button
        href={linkWhatsapp}
        style={{
          backgroundColor: "#bf0413",
          borderRadius: 10,
          marginRight: 10,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <text>FAÇA SEU PEDIDO</text>
      </Button>
    );
  }
  return (
    <>
      <Grid className="deliveryPanelContainer">
        <Grid className="layoutDeliveryPanel">
          <b>Deixaremos em sua casa!</b>
          <text>
            A melhor polpa em pronta entrega para Esperantinópolis e Região.
            Peça já sua Polpa de Frutas Natural!
          </text>
          <Grid style={{ marginTop: 40 }}>
            <SendButton />
          </Grid>
        </Grid>
        <Grid>
          <img src={delivery} className="imagesMain " alt="Delivery" />
        </Grid>
      </Grid>
    </>
  );
}
