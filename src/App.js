import React from "react";
import { Grid } from "@material-ui/core";
import ProductsPanel from "./content/productsPanel";
import MainPanel from "./content/deliveryPanel";
import SecondPanel from "./content/aboutPanel";
import Footer from "./content/footer";
import AppBar from "./content/appBar";

export default function App() {
  return (
    <Grid>
      <AppBar />
      <MainPanel />
      <SecondPanel />
      <ProductsPanel />
      <Footer />
    </Grid>
  );
}
