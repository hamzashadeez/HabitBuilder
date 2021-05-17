import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Habits = ({name, time, icon, day}) => {
    return (
        <TouchableOpacity style={styles.addHabit}>
            <MaterialCommunityIcons name={icon} color={colors.secondary} size={50} />            
            <Text style={styles.name}>{name} For {time}</Text>
            <View style={styles.day}>
                <Text style={styles.dayText}>{day}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Habits

const styles = StyleSheet.create({
    addHabit:{
        backgroundColor: colors.accent,
        height: 180, 
        width: 120,
        borderRadius: 10,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: "center",
        padding: 10
    },
    name:{
        color: colors.secondary,
        fontFamily: 'Lato',
        fontWeight: 'bold',
        marginTop: 5,
    },
    day:{
        backgroundColor: colors.secondary,
        padding: 5,
        width: "100%",
        marginHorizontal: "5%",
        marginTop: 7
    },
    dayText:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.accent
    }
})
