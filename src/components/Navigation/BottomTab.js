import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import Vendedor from '../Screen/Vendedor'
import Ventas from '../Screen/Ventas'
import other from '../Screen/other'

const principalColor = '#167156'
const subColor = '#9E9E9E'

const styles = StyleSheet.create(
    {
        IconStyle: {
            fontSize: 22,
            color: `white`,
            fontWeight: `bold`
        },
        ocultar: {
            display: 'none'
        }
    }
)

const Tab = createBottomTabNavigator()

export default function NavigationBottomStack() {

    return (
        <Tab.Navigator
            initialRouteName='Vendedor'
            screenOptions={{
                headerShown: false
            }}
            tabBarOptions={{
                activeTintColor: "white",
                activeBackgroundColor: `${subColor}`,
                inactiveTintColor: "#FFF",
                inactiveBackgroundColor: `${principalColor}`
            }}

        >
            <Tab.Screen
                style={{ color: 'black' }}
                name='Vendedor'
                component={Vendedor}
                options={{
                    title: 'Registar', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='md-clipboard-sharp' style={styles.IconStyle} color={color} size={size}></Ionicons>
                    )

                }}
            />

            <Tab.Screen
                name='Ventas'
                component={Ventas}
                options={{
                    title: 'ventas', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='md-folder-open-outline' style={styles.IconStyle} color={color} size={size}></Ionicons>
                    )
                }}

            />

            <Tab.Screen name='other'
                component={other}
                options={{
                    title: 'otro', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-rocket' style={styles.IconStyle} color={color} size={size}></Ionicons>
                    )
                }}
            />
        </Tab.Navigator>
    )
}