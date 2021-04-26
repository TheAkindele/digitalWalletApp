import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {buttonStyles} from "./button.style"


export const Button = ({action}) => {

    return (
        <View style={buttonStyles.container}>
            <TouchableOpacity 
                style={buttonStyles.button}
                onPress={() => {
                    //console.log("action ooo== ", action)
                    return action()
                }}
            >
            <Text style={buttonStyles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

