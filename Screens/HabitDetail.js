import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Day from "../Components/Day";
import { DaysData } from "../Components/data";

const HabitDetail = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: "Lato",
            fontSize: 19,
            color: colors.secondary,
            textAlign: "center",
          }}
        >
          {data.name} for {data.time}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <MaterialCommunityIcons
            name="close-box"
            color={colors.secondary}
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <View style={styles.iconCont}>
          <MaterialCommunityIcons
            name={data.icon}
            color={colors.secondary}
            size={70}
          />
        </View>
        <View>
          <View
            style={{
              backgroundColor: colors.secondary,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 130,
              borderRadius: 3,
            }}
          >
            <Text style={{ fontFamily: "Lato", fontSize: 15, color: "white" }}>
              Day 10
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Lato", fontSize: 17, color: colors.accent }}
            >
              More
            </Text>
            <MaterialCommunityIcons
              color={colors.accent}
              size={30}
              name="chevron-down"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* end of banner */}
      <View style={styles.listContainer}>
            {DaysData.map(day=> <Day day={day} key={day.number} />)}
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default HabitDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  iconCont: {
    width: 150,
    height: 150,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    backgroundColor: colors.accent,
    borderRadius: 10,
    marginRight: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  banner: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
  },
  listContainer:{
      flex: 1,
      padding: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginTop: 10      
  },
});
