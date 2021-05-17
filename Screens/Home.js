import React from 'react'
// import  Ionicons  from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { colors } from '../config/colors'
import HomeHeader from '../Components/HomeHeader';
import Habits from '../Components/Habits';
import {Data} from '../Components/data'


const Home = () => {
    return (
        <View style={styles.container}>
            <HomeHeader />
                       <Image source={require('../assets/plus.png')}  />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.habitsList}>
                <TouchableOpacity style={styles.addHabit}>
                    <View style={{width: 50, height: 50, backgroundColor: colors.accent, borderRadius: 25, alignItems: 'center', justifyContent: "center"}}>
                       <Entypo color={colors.secondary} size={25} name="plus"/> 
                    </View>
                </TouchableOpacity>
                {Data.map(d=> <Habits key={d.id} icon={d.icon} name={d.name} time={d.time} day={d.day} />)}
               
            </ScrollView>
            <View style={{flex: 3, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ width: "100%", height: 400, borderRadius: 10, backgroundColor: colors.accent }}>

                </View>
            </View>
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
        paddingVertical: 15,
        height: 90
    },
    addHabit:{
        backgroundColor: colors.secondary ,
        height: 180, 
        width: 120,
        borderRadius: 10,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: "center"
    }
})
