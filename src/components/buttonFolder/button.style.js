import {StyleSheet} from "react-native"
import {COLORS, FONTS, SIZES } from "../../constants"

export const buttonStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
        marginBottom: "5%"
    },
    button: {
        width: "70%",
        height: "100%",
        backgroundColor: COLORS.emerald,
        borderRadius: 20,
        justifyContent: "center",
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: "800",
        fontSize: SIZES.body3,
        textAlign: "center",
        //justifyContent: "center",
    }
})