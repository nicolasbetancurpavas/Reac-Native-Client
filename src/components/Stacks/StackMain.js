import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Home/Login';
import Ventas from '../Screen/Main/Ventas'

const Stack = createNativeStackNavigator()

export default function StackMain() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Ventas' component={Ventas} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )

}