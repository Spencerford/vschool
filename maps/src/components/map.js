import React from "react";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const GoogleMapCustom = withGoogleMap((props) => (
  <GoogleMap ref={props.onMapLoad()} defaultZoom={11} defaultCenter={{
    lat: props.lat,
    lng: props.lng
  }}>
    {props.markers.map((item, index) => {
      return (<Marker onClick={(event) => {
        props.handleSelectMarker(item.key, event);
      }} {...item}/>)
    })}
  </GoogleMap>
));

export default GoogleMapCustom;
