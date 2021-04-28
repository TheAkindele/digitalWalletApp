import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import {authStyle} from "../../register/register.style"
import {homeStyles} from "./home.style"
import {COLORS, FONTS, images, icons, SIZES } from "../../../constants"


export const HomePage = ({navigation}) => {

    return (
        <ScrollView style={homeStyles.container}>
            <View style={homeStyles.top}>
                <View style={homeStyles.welcome}>
                    <View style={homeStyles.profile}>
                        <Image source={icons.profile} style={homeStyles.image} />
                    </View>
                    <Text style={homeStyles.hello}>Hello, Bello !</Text>
                </View>
                <TouchableOpacity style={homeStyles.bellBox}>
                    <Text style={homeStyles.notification}>2</Text>
                    <Image source={icons.newBell} style={homeStyles.bell} />
                </TouchableOpacity>
            </View>

            <View style={homeStyles.main}>
                <View style={homeStyles.mainTop}>
                    <View style={homeStyles.nameBox}>
                        <Text style={homeStyles.label}>Name</Text>
                        <Text style={homeStyles.name}>Bello Damilola</Text>
                    </View>
                    <Image source={icons.circle} />
                </View>
                <View style={{flexDirection: "row", marginVertical: 20}}>
                    <View style={{flex: 1, height: 2, backgroundColor: 'white'}}></View>
                    <View style={{flex: 1, height: 2, backgroundColor: 'white', marginHorizontal: 25}}></View>
                    <View style={{flex: 1, height: 2, backgroundColor: 'white'}}></View>
                </View>
                <View style={homeStyles.balanceBox}>
                    <Text style={homeStyles.label}>Balance</Text>
                    <Text style={homeStyles.name}>#1,748,275</Text>
                </View>
            </View>

            <View style={homeStyles.section}>
                <Text style={homeStyles.title}>Features</Text>
                <View style={homeStyles.row}>
                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#e6e6ff"}]}>
                            <Image
                                source={icons.newTopup}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Mobile Top Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#ffd6cc"}]}>
                            <Image
                                source={icons.newTransfer}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Transfer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#f3e6ff"}]}>
                            <Image
                                source={icons.newWallet}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Wallet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#e6ffe6"}]}>
                            <Image
                                source={icons.newWeb}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Internet</Text>
                    </TouchableOpacity>
                </View>

                <View style={homeStyles.row}>
                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#fff0b3"}]}>
                            <Image
                                source={icons.newBills}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Bills</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#e6ffe6"}]}>
                            <Image
                                source={icons.newGame}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Games</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                    <View style={[homeStyles.iconBox, {backgroundColor: "#ffcccc"}]}>
                            <Image
                                source={icons.newMobile}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>Mobile Prepaid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeStyles.object}>
                        <View style={[homeStyles.iconBox, {backgroundColor: "#e6e6ff"}]}>
                            <Image
                                source={icons.newMore}
                                style={homeStyles.iconStyle}
                            />
                        </View>
                        <Text style={homeStyles.objectText}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={homeStyles.boxWithShadow}>
                    <Text style={[homeStyles.title, {color: "white"}]}>Special Promo</Text>
                    {/* <Text style={[homeStyles.subTitle, {color: "white"}]}>View all</Text> */}

                    <TouchableOpacity 
                        style={[authStyle.backBtn, {marginTop: 0}]}  
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Image
                            source={icons.back}
                            style={authStyle.backImg}
                        />
                        <Text style={[authStyle.backtext, {color: "white"}]}>
                            To Login
                        </Text>
                    </TouchableOpacity>
            </View>      
        </ScrollView>
    );
}

