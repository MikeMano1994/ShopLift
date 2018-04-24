
import React, {Component} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
      width: '500px',
      height: '380px'
  }

  return (
    <div style={{width : '500' , height : '500'}} >
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 37.3357807,
          lng: -121.8821639
        }}
        zoom={11}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick}
          name={'We live here'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>

        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
        </InfoWindow>
      </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({})(MapContainer);
