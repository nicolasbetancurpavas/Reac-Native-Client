import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBottomStack from './src/components/Navigation/BottomTab';


export default function App() {

    return (
        <>
            < NavigationContainer>
                <NavigationBottomStack />
            </NavigationContainer >

        </>
    );
};

