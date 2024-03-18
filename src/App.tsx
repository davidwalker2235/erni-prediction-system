import React from 'react';
import './App.css';
import Grid from "@mui/material/Grid";
import MapCard from "./layouts/mapCard";
import LineChartCard from "./layouts/lineChartCard";

function App() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <MapCard />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <LineChartCard />
        </Grid>
      </Grid>
  );
}

export default App;
