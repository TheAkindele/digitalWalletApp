import * as React from 'react';
import { View, Text, Button } from 'react-native';


export const HomePage = ({navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: "blue"}}>This is the Home page</Text>
        </View>
       
    );
}