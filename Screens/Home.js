import React from 'react'
// import  Ionicons  from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { colors } from '../config/colors'
import HomeHeader from '../Components/HomeHeader';
import Habits from '../Components/Habits';


const Home = () => {
    return (
        <View style={styles.container}>
            <HomeHeader />
                       <Image source={require('../assets/plus.png')}  />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.habitsList}>
                <TouchableOpacity style={styles.addHabit}>
                    <View style={{width: 50, height: 50, backgroundColor: 'white', borderRadius: 25}}>
                       {/* <Ionicons color={colors.secondary} size={20} name="plus"/>  */}
                    </View>
                </TouchableOpacity>
                <Habits />
                <Habits />
                <Habits />
                <Habits />
                <Habits />
                <Habits />
                <Habits />
                <Habits />
            </ScrollView>
            <View style={{flex: 3}}></View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
    },
    habitsList:{
        paddingHorizontal: 10,
        paddingVertical: 15
        // backgroundColor: 'red',
        // width: '100%',
        // height: "20%"
    },
    addHabit:{
        backgroundColor: colors.secondary,
        height: 180, 
        width: 120,
        borderRadius: 10,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: "center"
    }
})
