import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  MapView,
  Dimensions,
} from 'react-native';

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {}
    }
    this.handleRegionChange = this.handleRegionChange.bind(this)
  }

  handleRegionChange(region) {
    let lat = region.latitude
    let lon = region.longitude
    let latlng = lat + ',' + lon

    this.props.onLatlngChange && this.props.onLatlngChange(latlng)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        this.handleRegionChange = this.handleRegionChange.bind(this)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    let style = {
      position: 'absolute',
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      overflow: "visible",
    }

    let mapStyle = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    }

    if (this.state.region.latitude && this.state.region.longitude) {
      return (
        <View style={style}>
          <MapView style={mapStyle}
          onRegionChange={this.handleRegionChange}
          region={this.state.region}
          maxDelta={0.009}
          showsUserLocation={false}
          scrollEnabled={this.props.scroll}
          zoomEnabled={this.props.zoom}
          pitchEnabled={this.props.pitch}
          rotationEnabled={this.props.rotate}
          {...this.props} >
          </MapView>
        </View>
      )
    } else {
      return (
        <View style={style}>
        </View>
      )
    }
  }
}

export default Map
