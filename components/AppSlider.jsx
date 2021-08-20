import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { gray } from "../utils/colors";

export class AppSlider extends Component {
  render() {
    const { max, unit, step, value, onChange } = this.props;
    return (
      <View style={styles.row}>
        <Slider
          style={{ flex: 1 }}
          step={step}
          value={value}
          maximumValue={max}
          minimumValue={0}
          onValueChange={onChange}
        />
        <View style={styles.metricCounter}>
          <Text style={{ fontSize: 24, textAlign: "center" }}>{value}</Text>
          <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
        </View>
      </View>
    );
  }
}

export default AppSlider;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  metricCounter: {
    width: 85,
    justifyContent: "center",
    alignItems: "center",
  },
});
