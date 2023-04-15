import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../views/Detail';
import Home from '../views/Home';

const Stack = createNativeStackNavigator();

export const RootRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                component={Home}
                name="Home"
                options={{title: 'Home'}}
            />
            <Stack.Screen
                component={Detail}
                name="Detail"
                options={{title: 'Detail'}}
            />
        </Stack.Navigator>
        
    );
};