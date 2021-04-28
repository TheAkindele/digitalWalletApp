import * as React from "react"
import {Image} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLORS, icons} from "../../constants"
import {HomePage} from "./home/Home"
import {Profile} from "./profile/Profile"
import {Transactions} from "./transactions/Transactions"

const TabStack = createBottomTabNavigator()

export const AuthPage = () => {
    return (
        <TabStack.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: COLORS.mediumBlue,
          }}
        >
            <TabStack.Screen 
                name="Home" component={HomePage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.home} 
                            style={{tintColor: focused ? COLORS.mediumBlue : "#666666"}}
                        />
                    ),
                  }}
            />
            <TabStack.Screen
                name="Transactions" 
                component={Transactions}
                options={{
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.statistics} 
                            style={{tintColor: focused ? COLORS.mediumBlue : "#666666"}}
                        />
                    ),
                }}
            />
            <TabStack.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.avatar}
                            style={{tintColor: focused ? COLORS.mediumBlue : "#666666"}}
                        />
                    ),
                }}
            />
        </TabStack.Navigator>
    )
}