"use client"

import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import BarCharts from "../components/BarChart";

const BarChartCard = () => {
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Bar Chart" text={cardText} >
                <BarCharts />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default BarChartCard