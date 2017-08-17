import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions";
import autoBind from "react-autobind";

import GoogleMapCustom from "../components/map.js";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      width: 0,
      padding: 0,
      lat: 0,
      lng: 0
    };
    autoBind(this);
  }
  handleSelectMarker(key, event) {
    let {lat, lng} = event.latLng;
    this.setState({key, lat: lat(), lng: lng(), width: 200, padding: "20px 40px"});
  }
  handleClose() {
    this.setState({width: 0, padding: 0});
  }
  render() {
    return (
      <div className="map-container">
        <GoogleMapCustom onMapLoad={this.handleLoad} handleSelectMarker={this.handleSelectMarker} lat={this.props.lat} lng={this.props.lng} containerElement={< div style = {{ height: `400px`, width: "100%" }}/>} mapElement={< div style = {{ height: `100%` }}/>} onMapLoad={() => {}} onMapClick={() => {}} markers={this.props.markers} onMarkerRightClick={() => {}}/>
        <div className="map-label" style={{
          width: this.state.width,
          padding: this.state.padding
        }}>
          <h2>{this.state.key}</h2>
          <p>Latitude: {this.state.lat}</p>
          <p>Longitude: {this.state.lng}</p>
          <button className="close-btn" onClick={this.handleClose}>X</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators)(MapContainer);
