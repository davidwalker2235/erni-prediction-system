"use client"

import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import BasicLineChart from "../components/BasicLineChart";

const LineChartCard = () => {
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Line Chart" text={cardText}>
                <BasicLineChart />
            </MultiActionAreaCard>
        </Paper>
    );
}

export default LineChartCard