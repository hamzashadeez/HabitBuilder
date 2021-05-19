import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AddHabit from "../Screens/AddHabit";
import { colors } from "../config/colors";
import HomeStack from "./HomeStack";
import Profile from "../Screens/Profile";
import Forum from "../Screens/Forum";

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  inactiveTintColor: colors.accent,
  activeTintColor: colors.secondary,
  style: {
    backgroundColor: colors.primary,
    paddingBottom: 3,
    paddingTop: 3
  },
};

const BottomStack = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
          tabBarBadge: 2,
        }}/>
      <Tab.Screen name="Forum" component={Forum} options={{
          tabBarLabel: 'Forum',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="forum" color={color} size={size} />
          ),
          tabBarBadge: 9,
        }}/>
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
