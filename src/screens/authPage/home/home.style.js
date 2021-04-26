import {StyleSheet} from "react-native"
import { COLORS, FONTS , SIZES} from "../../../constants"

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    top: {
        backgroundColor: COLORS.mediumBlue,
        borderRadius: 30,
        padding: "10%",
        marginTop: "10%",
        justifyContent: "center"
    },
    go: {
        fontSize: SIZES.h2,
        fontWeight: "700",
        color: "white",
        marginLeft: "20%",
        marginBottom: 10,
    },
    upgrade: {
        fontSize: SIZES.body3,
        color: "white",
        marginLeft: "20%",
    },
    section: {
        marginTop: 50,
        //flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    title: {
        fontWeight: "800",
        fontSize: 16,
        marginBottom: 10,
        borderColor: "green",
        borderWidth: 1
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        borderColor: "blue",
        borderWidth: 1,
    },
    object: {
        width: "20%",
        height: 80,
        //flex: 1,
        //justifyContent: "space-between",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
        padding: 0,
    },
    iconBox: {
        backgroundColor: "yellow",
        width: "80%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 8,
    },
    iconStyle: {
        width: "40%",
        height: "50%",
        resizeMode: "contain",
        fontWeight: "800",
    },
    objectText: {
        width: "80%",
        fontSize: 14,
        fontWeight: "700",
        color: "green",
        //backgroundColor: "pink"
    }
})