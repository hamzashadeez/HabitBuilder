import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../config/colors'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}></View>
                <Text style={{fontFamily: 'Lato', marginTop: 10, fontSize: 19, color: colors.secondary}}>Hamza Shadeez</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.listItem}>
                    <Text style={{fontFamily: 'Lato', fontSize: 12, color: colors.secondary}}>Email Address</Text>
                    <Text style={{fontFamily: 'Lato', fontSize: 17, color: colors.primary, marginTop: 3}}>hahmad1178@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        elevation: 2,
        backgroundColor: colors.secondary
    },
    body:{
        paddingRight: 20,
        paddingLeft: 10
    },
    container:{
        flex: 1,
        backgroundColor: colors.primary,
    },
    header:{
        height: 200,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colors.accent,
        marginBottom: 15
    },
    listItem:{
        backgroundColor: colors.accent,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        borderRadius: 5
    },
})
