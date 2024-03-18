import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HeatMap from "./heatMap";
import LocationPoint from "./marker";

export enum MapType {
    heatMap = "heatMap",
    positions = "positions",
}

const Map = ({center, mapType, hasFullScreen}: {center: [number, number], mapType: MapType, hasFullScreen?: boolean}) => {
    const markers: [{position: [number, number], text: string}] = [{
        position: [41.38602511798184, 2.1694234966120516],
        text: 'ERNI Consulting'
    }]

    return (
        <MapContainer center={center} zoom={17} scrollWheelZoom style={hasFullScreen ? {height: '100%'} : {height: 400}}>
            <HeatMap active={MapType[mapType] === MapType.heatMap}/>
            <TileLayer
                attribution='&copy; <a href="https://www.betterask.erni/">ERNI Consulting</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(mapType === MapType.positions) && markers.map((data, index) => <LocationPoint {...data} key={`location-${index}`} />)}
        </MapContainer>
    )
}

export default Map