import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/colors'

const Forum = () => {
    return (
        <View style={styles.container}>
            <Text>FORUM</Text>
        </View>
    )
}

export default Forum

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: 15,
        paddingHorizontal: 10
    }
})
