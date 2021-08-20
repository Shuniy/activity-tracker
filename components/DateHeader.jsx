import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { purple } from "../utils/colors";

const DateHeader = (props) => {
  const { date } = props;
  return <Text style={styles.date}>{date}</Text>;
};

export default DateHeader;

const styles = StyleSheet.create({
  date: {
    color: purple,
    fontSize: 25,
    textAlign: "center",
    paddingTop: 10,
  },
});
