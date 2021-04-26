import * as React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomePage} from "./home/Home"

const TabStack = createBottomTabNavigator()

export const AuthPage = () => {
    return (
        <TabStack.Navigator initialRouteName="Home">
            <TabStack.Screen name="Home" component={HomePage} />
        </TabStack.Navigator>
    )
}