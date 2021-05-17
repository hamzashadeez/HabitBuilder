import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HabitNames, Data } from "../Components/data";
import IconButton from "../Components/IconButton";

const AddHabit = ({ navigation }) => {
  const [habitName, setHabitName] = useState("");
  const [duration, setDuration] = useState(10);
  const [iconName, setIconName] = useState("run");

  //   Functions
  const increment = () => {
    setDuration(duration + 5);
  };

  const decrement = () => {
    if (duration > 5) {
      setDuration(duration - 5);
    }
  };

  const ChangeIcon = (icon) => {
    setIconName(icon);
  };

  const submitHabit = () => {
    let habit = {
      id: 7,
      name: habitName,
      time: `${duration} minutes`,
      icon: iconName,
      day: "Day 01",
    };

    Data.push(habit)
  };
  return (
    <View style={styles.container}>
      <View style={styles.ModalView}>
        {/* Header */}
        <View style={styles.ModalHeader}>
          <Text
            style={{
              fontWeight: "bold",
              fontFamily: "Lato",
              color: colors.secondary,
              fontSize: 25,
            }}
          >
            Add New Habit
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <MaterialCommunityIcons
              name="close-box"
              color={colors.secondary}
              size={40}
            />
          </TouchableOpacity>
        </View>
        {/* Body */}
        <View style={styles.body}>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 15,
              marginTop: 5,
              color: colors.secondary,
            }}
          >
            Enter name of the new habit
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Habit Name e.g Workout, Reading."
            value={habitName}
            onChange={(e) => setHabitName(e.nativeEvent.text)}
          />
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Set Duration
          </Text>
          <View style={styles.durationContainer}>
            <Text
              style={{
                fontFamily: "Lato",
                fontSize: 40,
                color: colors.primary,
              }}
            >
              {duration} minutes
            </Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={() => increment()}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => decrement()}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* end of duration */}
        <Text
          style={{
            fontFamily: "Lato",
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          Set Icon
        </Text>
        <View style={styles.mainIcon}>
          <MaterialCommunityIcons
            name={iconName}
            color={colors.secondary}
            size={100}
          />
        </View>
        <ScrollView
          style={{ maxHeight: 70 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {HabitNames.map((d) => (
            <IconButton key={d.name} icon={d.icon} ChangeIcon={ChangeIcon} />
          ))}
        </ScrollView>
        {/*END Icon */}
        <View style={{ width: "100%", flex: 1 }}>
          <TouchableOpacity style={styles.submit}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Lato",
                color: colors.primary,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddHabit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  ModalView: {
    backgroundColor: colors.accent,
    flex: 1,
    padding: 15,
  },
  ModalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  ModalBody: {
    backgroundColor: colors.gray,
  },
  body: {
    paddingVertical: 15,
  },
  input: {
    fontSize: 14,
    padding: 10,
    marginTop: 8,
    marginBottom: 15,
    outline: "none",
    border: "none",
    backgroundColor: colors.primary,
    color: colors.secondary,
    fontFamily: "Lato",
  },
  durationContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  btnContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 15,
    marginHorizontal: 4,
    borderRadius: 3,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.gray,
    fontFamily: "Lato",
    fontSize: 16,
  },
  mainIcon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 3,
    padding: 20,
    marginTop: 7,
    marginBottom: 15,
  },
  submit: {
    width: "100%",
    height: 30,
    marginTop: 30,
    elevation: 2,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
