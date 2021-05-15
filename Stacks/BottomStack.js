import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
// import {Ionicons} from '@expo/vector-icons'
import AddHabit from "../Screens/AddHabit";
import { colors } from "../config/colors";

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  inactiveTintColor: "gray",
  activeTintColor: colors.secondary,
  style: {
    backgroundColor: colors.primary,
  },
};

const BottomStack = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={AddHabit} />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
