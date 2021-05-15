import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../config/colors'

const Habits = () => {
    return (
        <TouchableOpacity style={styles.addHabit}>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 25}}> */}
           {/* <Ionicons color={colors.secondary} size={20} name="plus"/>  */}
        {/* </View> */}
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
        justifyContent: "center"
    }
})
