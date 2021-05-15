import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/colors'

const HomeHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: 'white', letterSpacing: 1, fontFamily: "Lato"}}>Build Habit</Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 15,
        marginBottom:10,
        elevation: 2,
        borderBottomWidth: 1,
        borderBottomColor: colors.accent
        // backgroundColor: colors.accent
    }
})
