import React, { Component } from 'react';

import {
  View,
} from 'react-native';

class ToggleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {
      value,
      options,
      renderItem,
      style,
      spacing = 0,
      orientation = 'horizontal',
    } = this.props

    const orientationStyle = {
      // position: 'absolute',
      // bottom: -10,
      flex: 0.1,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    }

    const itemWrapperStyle = {
      flex: 1,
    }

    return (
      <View
        style={style}>
        <View
          style={[orientationStyle]}>
          {options.map((option, i) => {
            const active = option === value
            const element = renderItem(option, active, i === options.length - 1, i)
            const spacingStyle = {
              marginTop: orientation === 'vertical' && i !== 0 ? spacing : 0,
              marginLeft: orientation === 'horizontal' && i !== 0 ? spacing : 0,
            }
            return (
              <View
                style={[spacingStyle, itemWrapperStyle]}
                key={i}>
                {element}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

ToggleContainer.defaultProps = {
  value: null,
  options: [],
  renderItem: () => <View />,
  style: {},
}

export default ToggleContainer
