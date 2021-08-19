import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Slider from "@react-native-community/slider"

export class Slider extends Component {
    render() {
        const { max, unit, step, value, onChange } = this.props;
        return (
          <View>
            <Text>Slider</Text>
            <Slider
              step={step}
              value={value}
              maximumValue={max}
              minimumValue={0}
              onValueChange={onChange}
            />
            <View>
              <Text>{value}</Text>
              <Text>{unit}</Text>
            </View>
          </View>
        );
    }
}

export default Slider
