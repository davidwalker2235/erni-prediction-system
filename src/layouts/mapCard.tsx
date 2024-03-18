import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "../components/card";
import {MapType} from "../components/map/map";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../providers/appProvider";
import Grid from "@mui/material/Grid";
import BarChartCard from "../layouts/barChartCard";
import LineChartCard from "../layouts/lineChartCard";
import PieArcLabel from "../components/PieArcLabel";
import Map from '../components/map/map';

const MapCard = () => {
    const context: any = useContext(AppContext)
    const [value, setValue] = React.useState('positions');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const cardText = context?.locationSelected ? `The point selected is ${context?.locationSelected}` : "No pointer selected"
    const expandContent = () => (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={value}
                onChange={handleChange}
                name="radio-buttons-group"
            >
                <FormControlLabel value="positions" control={<Radio />} label="Positions" />
                <FormControlLabel value="heatMap" control={<Radio />} label="Heat Map" />
            </RadioGroup>
            {!!context?.locationSelected &&
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} lg={4}>
                        <BarChartCard />
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <LineChartCard />
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                        <Paper elevation={6}>
                            <MultiActionAreaCard title="Pie Chart" text={cardText}>
                                <PieArcLabel />
                            </MultiActionAreaCard>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </FormControl>
    )

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard
                title="Map"
                text={cardText}
                hasFullScreen
                hasExpand
                expandContent={expandContent}
                isExpanded={!!context?.locationSelected}
            >
                <Map center={[41.38602511798184, 2.1694234966120516]} mapType={value as MapType}/>
            </MultiActionAreaCard>
        </Paper>
    );
}

export default MapCard