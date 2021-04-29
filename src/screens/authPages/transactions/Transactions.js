import React from 'react'
import { Text, View, ScrollView , TouchableOpacity, Image} from 'react-native'
import { icons } from '../../../constants'
import {styles} from "./transactions.style"
import {homeStyles} from "../home/home.style"

export const Transactions = () => {
    const [debit, setDebit] = React.useState(true)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Transactions History</Text>
            <View style={styles.title2}>
                <Text style={styles.categories}>Category</Text>
                <TouchableOpacity style={styles.timeBox}>
                        <Text style={styles.duration}>This Week</Text>
                        <Image source={icons.arrowDown} style={styles.arrowDown} />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <View style={styles.category}>
                    <View style={styles.main}>
                        <TouchableOpacity style={styles.left}>
                            <View style={styles.iconBox}>
                                <Image source={icons.newTransfer} style={styles.mainIcon} />
                            </View>
                            <Text style={styles.topic}>Transfer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.right}>
                            <Image source={icons.downArrow} style={styles.rightImg}  />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.category}>
                    <View style={styles.main}>
                        <TouchableOpacity style={styles.left}>
                            <View style={styles.iconBox}>
                                <Image source={icons.newWallet} style={styles.mainIcon} />
                            </View>
                            <Text style={styles.topic}>Crypto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={icons.upArrow} style={styles.rightImg} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.content}>
                            <View style={styles.left}>
                                <View style={[styles.iconBox, {backgroundColor: "#ffebcc"}]}>
                                    <Image source={icons.bitcoin}  />
                                </View>
                                <Text style={styles.topic}>Bitcoin</Text>
                            </View>
                            <Text style={styles.right}>-$2846.94</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.left}>
                                <View style={[styles.iconBox, {backgroundColor: "#e6f9ff"}]}>
                                    <Image source={icons.ethereum}  />
                                </View>
                                <Text style={styles.topic}>Ethereum</Text>
                            </View>
                            <Text style={styles.right}>- $2846.94</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.left}>
                                <View style={[styles.iconBox, {backgroundColor: "#e6e6e6"}]}>
                                    <Image source={icons.ripple}  />
                                </View>
                                <Text style={styles.topic}>XRP/Ripple</Text>
                            </View>
                            <Text style={styles.right}>- $2846.94</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.left}>
                                <View style={[styles.iconBox, {backgroundColor: "#e6ffe6"}]}>
                                    <Image source={icons.tether}  />
                                </View>
                                <Text style={styles.topic}>USDT</Text>
                            </View>
                            <Text style={styles.right}>- $2846.94</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.left}>
                                <View style={[styles.iconBox, {backgroundColor: "#fff7e6"}]}>
                                    <Image source={icons.dollars}  />
                                </View>
                                <Text style={styles.topic}>USD</Text>
                            </View>
                            <Text style={styles.right}>- $2846.94</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.category}>
                    <View style={styles.main}>
                        <TouchableOpacity style={styles.left}>
                            <View style={styles.iconBox}>
                                <Image source={icons.newWeb} style={styles.mainIcon} />
                            </View>
                            <Text style={styles.topic}>Internet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.right}>
                            <Image source={icons.downArrow} style={styles.rightImg}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


