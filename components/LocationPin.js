import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class LocationPin extends Component {

  render() {
    let backgroundColor = this.props.pinColor || "rgba(0,154,255,1)"
    let screenStyle = {
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      position: "absolute",
      overflow: "visible",
    }
    let innerStyle = {
      height: 100,
      width: 380,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }
    let top = -25 + Dimensions.get('window').height / 2 +  + (this.props.top || 0)
    let left = -5 + (this.props.left || 0)
    let style = {
      borderRadius: 21,
      backgroundColor: backgroundColor,
      left: left,
      top: top,
      height: 41,
    }
    let textStyle = {
      fontSize: 20,
      color: this.props.textColor || 'white',
      backgroundColor: "transparent",
      paddingVertical: 8,
      paddingHorizontal: 21,
      fontWeight: "300",
    }
    let nubStyle = {
      width: 3,
      height: 20,
      backgroundColor: backgroundColor,
      top: top,
      left: left,
    }
    return (
      <View style={screenStyle}
        pointerEvents={'box-none'}>
        <View style={innerStyle}>
          <TouchableOpacity style={style}
            onPress={this.props.onPress}
            activeOpacity={75 / 100}>
            <Text style={textStyle}>{this.props.text || ""}</Text>
          </TouchableOpacity>
          <View style={nubStyle}></View>
        </View>
      </View>
    )
  }
}

export default LocationPin
