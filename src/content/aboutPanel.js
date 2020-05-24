import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import logo from "../img/logo2.svg";
import "../css/main.css";
import { InstagramOutlined } from "@ant-design/icons";

export default function SecondPanel() {
  return (
    <Grid className="aboutPanelContainer">
      <Grid>
        <img src={logo} className="imagesMain " />
      </Grid>
      <Grid className="layoutPanelAbout">
        <b>Conheça-nos</b>
        <Grid
          style={{
            display: "flex",
          }}
          justify="flex-end"
        >
          <text>
            Nossa empresa oferece produtos de qualidade sem a ultilização de
            recursos químicos, que ocasionam problemas de saúde. Trabalhamos com
            objetivo buscar a satisfação de nossos clientes ao provarem <br /> O
            SABOR DA FRUTA!
          </text>
        </Grid>

        <Grid className="gridInstagram">
          <IconButton
            href="https://www.instagram.com/polpafrutanatural/"
            style={{
              backgroundColor: "#F2B705",
              marginRight: 20,
              width: 50,
              height: 50,
            }}
          >
            <InstagramOutlined style={{ fontSize: 20, color: "#bf0413" }} />
          </IconButton>
          <b>@polpafrutanatural</b>
        </Grid>
      </Grid>
    </Grid>
  );
}
