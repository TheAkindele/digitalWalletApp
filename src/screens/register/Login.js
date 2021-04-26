import React from 'react'
import {ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import {COLORS, FONTS, images, icons, SIZES } from "../../constants"
import {authStyle} from "./register.style"
import {Button} from "../../components"

export const Login = ({navigation}) => {
    const changePage = () => navigation.navigate("Auth")

    return (
        // <ScrollView>
        <View style={authStyle.container}>
            <View style={[authStyle.imageContStyle, {marginTop: "42%"}]}>
                <Image
                    source={images.wallieLogo}
                    style={authStyle.imageStyle}
                />
            </View>

            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>Email</Text>
                <TextInput
                    placeholder="Enter Your Email Address"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                />
            </View>

            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>Password</Text>
                <TextInput
                    placeholder="Enter your Password"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={authStyle.eyeBox}>
                    <Image source={icons.disable_eye} style={authStyle.toggleEye} />
                </TouchableOpacity>
            </View>

            <Text 
                style={{textAlign: "right", marginTop: 50, color: "white"}}
            >
                Dont Have An Account? {" "}
                <Text
                    style={{color: COLORS.green, fontWeight: "bold"}}
                    onPress={() => navigation.navigate("Signup")}
                >
                    Sign Up
                </Text>
            </Text>
            
            <Button
                action={changePage}
            />
        </View>
        // </ScrollView>
    )
}


