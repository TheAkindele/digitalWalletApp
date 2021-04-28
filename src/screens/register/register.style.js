import { StyleSheet } from 'react-native'
import {COLORS, FONTS, SIZES } from "../../constants"

export const authStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.mediumBlue,
        color: COLORS.lightGray,
        flex: 1,
        paddingHorizontal: "5%",
        position: "relative",
    },
    imageContStyle: {
        marginTop: "20%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        marginBottom: "5%"
    },
    imageStyle: {
        width: "70%",
        resizeMode: "contain",
    },
    formStyle: {
        justifyContent: "center",
        marginTop: 40,
        position: "relative",
    },
    labelStyle: {
        fontSize: SIZES.body3,
        color: COLORS.gray,
        fontWeight: "700",
    },
    inputStyle: {
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 1,
        color: COLORS.white,
        marginTop: 10,
        fontSize: SIZES.body3,
        paddingVertical: 10,
        fontWeight: "500",
    },
    eyeBox: {
        position: "absolute",
        right: "5%",
        bottom: 8,
        width: 22,
        height: 22,
        padding: 2,
    },
    eyeToggle: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
    backBtn: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 1,
        borderColor: "red",
        zIndex: 20,
        marginTop: "20%",
    },
    backImg: {
        width: 20,
        resizeMode: "contain",
        height: "100%",
        marginRight: 3,
    },
    backtext: {
        color: "#00ff00",
        fontWeight: "600",
    },
})



