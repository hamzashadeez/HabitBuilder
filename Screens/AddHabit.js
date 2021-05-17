import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/colors'

const AddHabit = () => {
    return (
        <View style={styles.container}>
            <Text>Add new Habit</Text>
        </View>
    )
}

export default AddHabit

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary
    }
})
