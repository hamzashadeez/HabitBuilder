import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../config/colors";

const Day = ({ day }) => {
  return (
    <TouchableOpacity
      style={[
        styles.day,
        { backgroundColor: day.checked ? colors.secondary : colors.accent },
      ]}
    >
      <Text style={{ fontSize: 16, fontFamily: "Lato", color: "white" }}>
        {day.number}
      </Text>
    </TouchableOpacity>
  );
};

export default Day;

const styles = StyleSheet.create({
  day: {
    width: 50,
    height: 60,
    borderRadius: 3,
    elevation: 3,
    margin: 7,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:
  },
});
