import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Screen/Home/Register';
import Login from '../Screen/Home/Login';
import Ventas from '../Screen/Main/Ventas'

const Stack = createNativeStackNavigator()

export default function StackHome() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Ventas' component={Ventas} />
        </Stack.Navigator>
    )
}