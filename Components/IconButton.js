import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from '../config/colors';

const IconButton = ({icon, ChangeIcon}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>ChangeIcon(icon)}>
            <MaterialCommunityIcons name={icon} size={30} color={colors.secondary} />
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        marginHorizontal: 5,
        // padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 7,
        elevation: 2,
        backgroundColor: colors.primary
    }
})
