import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getMetricMetaInfo, timeToString } from "../utils/helpers";
import Slider from "./Slider";
import Stepper from "./Stepper";
import DateHeader from "./DateHeader";

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  )
};

export class AddEntry extends Component {
  state = {
    run: 5,
    bike: 10,
    swim: 20,
    sleep: 30,
    eat: 40,
  };

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState((prevState) => {
      const Count = prevState(metric) + step;

      return {
        ...prevState,
        [metric]: Math.min(Count, max),
      };
    });
  };

  decrement = (metric) => {
    this.setState((prevState) => {
      const Count = prevState(metric) - getMetricMetaInfo(metric).step;

      return {
        [metric]: Math.max(Count, 0),
      };
    });
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }));
  };

  submit = () => {
    const key = timeToString()
    const entry = this.setState

    // Update Redux

    this.setState(() => ({
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }))

    // Go to homepage

    // Save to Database

    // Clearn the default notification which means display the content
  }

  render() {
    const metaInfo = getMetricMetaInfo();
    return (
      <View>
      <DateHeader date = {(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key, index) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View>
              {getIcon()}
              <View>
                {type === "slider" ? (
                  <Slider
                    name={key}
                    key={index}
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest}
                  />
                ) : (
                  <Stepper
                    name={key}
                    key={index}
                    value={value}
                    {...rest}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                  />
                )}
              </View>
              <SubmitBtn onPress={this.submit} />
            </View>
          );
        })}
      </View>
    );
  }
}

export default AddEntry;
