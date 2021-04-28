import * as React from 'react'
import { View, Text, Image, TextInput, ScrollView , TouchableOpacity} from 'react-native'
import {authStyle} from "./register.style"
import {COLORS, FONTS, images, icons, SIZES } from "../../constants"
import {Button} from "../../components"

export const SignUp = ({navigation}) => {
    const [security, setSecurity] = React.useState(true)

    const toggleEye = () => {
        setSecurity(!security)
    }

    return (
        <ScrollView style={authStyle.container}>
            <TouchableOpacity 
                style={authStyle.backBtn}  
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.arrowLeft}
                    style={authStyle.backImg}
                />
                <Text style={authStyle.backtext}>
                    To Login
                </Text>
            </TouchableOpacity>

            <View style={authStyle.imageContStyle}>
                <Image
                    source={images.wallieLogo}
                    style={authStyle.imageStyle}
                />
            </View>

            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>FullName</Text>
                <TextInput
                    placeholder="Enter Your FullName"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                />
            </View>

            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>Email</Text>
                <TextInput
                    placeholder="Enter Your Email"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                />
            </View>
            
            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>Phone Number</Text>
                <TextInput
                    placeholder="Enter Your Phone Number"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                />
            </View>

            <View style={authStyle.formStyle}>
                <Text style={authStyle.labelStyle}>Password</Text>
                <TextInput
                    placeholder="Enter Your Password"
                    style={authStyle.inputStyle}
                    placeholderTextColor={COLORS.white}
                    secureTextEntry={security}
                />
                <TouchableOpacity 
                    style={authStyle.eyeBox}
                    onPress={() => toggleEye()}
                >
                    <Image source={security ? icons.disable_eye : icons.eye} style={authStyle.eyeToggle} />
                </TouchableOpacity>
            </View>
            <Button />
        </ScrollView>
    )
}


