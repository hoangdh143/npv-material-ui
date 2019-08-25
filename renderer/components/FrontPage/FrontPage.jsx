import React from "react";
import Grid from "@material-ui/core/Grid";
import CardNPV from "../Card/CardNPV";
import CardCFInflow from "../Card/CardCFInflow";
import CardCFOutflow from "../Card/CardCFOutflow";
import CardInterestRate from "../Card/CardInterestRate";
import CardTotal from "../Card/CardTotal";
import Layout from "../Layout/Layout";

export default function FrontPage() {

  return (
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <CardNPV />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CardCFInflow />
          </Grid>

          <Grid item xs={6}>
            <CardCFOutflow />
          </Grid>

          <Grid item xs={6}>
            <CardInterestRate />
          </Grid>

          <Grid item xs={6}>
            <CardTotal />
          </Grid>
        </Grid>
      </Layout>
  );
}
