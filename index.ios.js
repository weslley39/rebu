/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';

import {
  FullscreenMap,
  LocationPin,
  Navbar,
  LocationSearchbox,
  ToggleContainer,
  ToggleItem
} from './index.js'

class newRebu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
            <FullscreenMap
              onLatlngChange={(latlng) => {this.setState({latlng})}}
              pitch={true}
              rotate={true}
              zoom={true}
              scroll={true}
            />
            <LocationPin
              text={"SET LOCATION"}
              pinColor={"rgba(75,75,75,1)"}
              textColor={"rgba(255,255,255,1)"}
              top={-53}
              left={3}
            />
        </View>

        <View style={styles.overlay} pointerEvents={'box-none'}>
          <View>
            <Navbar title={"Rebu"} />
            <LocationSearchbox
              latlng={this.state.latlng}
              margin={10}
              showLabel={true}
              labelText={"MY LOCATION"}
              defaultText={"Choose Your Location"}
              labelColor={"rgba(113,187,28,1)"}
              textColor={"rgba(0,0,0,1)"}
            />
        </View>

        <ToggleContainer
          value={(this.state && this.state.option) || 'UberX'}
          options={['UberX', 'UberXL']}
          style={{padding: 4, backgroundColor: 'white'}}
          orientation={"horizontal"}
          spacing={10}
          renderItem={(option, active) => (
            <ToggleItem
              option={option}
              active={active}
              onPress={() => this.setState({option})}
              color={"rgba(45,178,209,1)"}
              backgroundColor={"rgb(255,255,255)"}
              borderColor={"rgba(231,231,231,1)"}
              activeColor={"rgba(255,255,255,1)"}
              activeBackgroundColor={"rgba(45,178,209,1)"}
              borderRadius={2}
            />
          )}
        />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  }
});

AppRegistry.registerComponent('newRebu', () => newRebu);
