import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import StackHome from '../Stacks/StackHome'
import StackMain from '../Stacks/StackMain';


const principalColor = '#2884E0'
const subColor = '#6A10C3'

const styles = StyleSheet.create(
    {
        IconStyle: {
            fontSize: 22,
            color: `white`,
            fontWeight: `bold`
        },
        ocultar: {
            display: 'none'
        },

        container: {
            marginTop: 0,
            maxWidth: 450,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            margin: 'auto',
            padding: 0,
            backgroundColor: '#E9E9E9',
        }
    }
)

const Tab = createBottomTabNavigator()

export default function NavigationBottomStack() {

    return (
        <Tab.Navigator
            style={styles.container}
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{
                activeTintColor: "white",
                activeBackgroundColor: `${subColor}`,
                inactiveTintColor: "#FFF",
                inactiveBackgroundColor: `${principalColor}`,

            }}

        >
            <Tab.Screen
                style={{ color: 'black', }}
                name='Home'
                component={StackHome}
                options={{
                    tabBarStyle: { display: 'none' },
                    title: 'Home', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='md-clipboard-sharp' style={styles.IconStyle} color={color} size={size}></Ionicons>
                    )

                }}
            />


            <Tab.Screen name='Main'
                component={StackMain}
                options={{
                    title: 'otro', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='ios-rocket' style={styles.IconStyle} color={color} size={size}></Ionicons>
                    )
                }}
            />
        </Tab.Navigator>
    )
}