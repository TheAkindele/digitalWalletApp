import * as React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomePage} from "./home/Home"
import {Profile} from "./profile/Profile"
import {Transactions} from "./transactions/Transactions"

const TabStack = createBottomTabNavigator()

export const AuthPage = () => {
    return (
        <TabStack.Navigator initialRouteName="Home">
            <TabStack.Screen name="Home" component={HomePage} />
            <TabStack.Screen name="Transactions" component={Transactions} />
            <TabStack.Screen name="Profile" component={Profile} />
        </TabStack.Navigator>
    )
}