
import React, {Component} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
  width: '30%',
  height: '40%',
  marginLeft: '50px',
  marginTop: '50px'

}
    return (
          <div style={{width : '500' , height : '500'}} ><Map
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
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>hihihihi</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
     
    );
  }
}

export default GoogleApiWrapper({
})(MapContainer)