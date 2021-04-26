import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {authStyle} from "../../register/register.style"
import {homeStyles} from "./home.style"
import {COLORS, FONTS, images, icons, SIZES } from "../../../constants"


export const HomePage = ({navigation}) => {

    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.top}>
                <Text style={homeStyles.go}>Go Premium</Text>
                <Text style={homeStyles.upgrade}>
                    Upgrade to premium, {"\n"}
                    get more profit
                </Text>
            </View>

            <View style={homeStyles.section}>
                <Text style={homeStyles.title}>Features</Text>
                <View style={homeStyles.row}>
                    <View style={homeStyles.object}>
                        <View style={homeStyles.iconBox}>
                            <Image
                                source={icons.reload}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Mobile Top Up</Text>
                    </View>

                    <View style={homeStyles.object}>
                        <View style={homeStyles.iconBox}>
                            <Image
                                source={icons.reload}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Top Up</Text>
                    </View>

                    <View style={homeStyles.object}>
                        <View style={homeStyles.iconBox}>
                            <Image
                                source={icons.reload}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Mobile</Text>
                    </View>

                    <View style={homeStyles.object}>
                        <View style={homeStyles.iconBox}>
                            <Image
                                source={icons.reload}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Mobile Top Up</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

