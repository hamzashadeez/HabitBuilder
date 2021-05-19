import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../Screens/Home';
import AddHabit from '../Screens/AddHabit';
import HabitDetail from '../Screens/HabitDetail';

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
       <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="Dashboard" component={Home} />
           <Stack.Screen name='AddHabit' component={AddHabit}/>
           <Stack.Screen name='HabitDetail' component={HabitDetail}/>
       </Stack.Navigator>
    )
}

export default HomeStack
