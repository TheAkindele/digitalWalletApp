import {StyleSheet} from "react-native"
import { COLORS, FONTS , SIZES} from "../../../constants"

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    top: {
        marginTop: "10%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 7,
    },
    welcome: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    hello: {
        fontWeight: "900",
        fontSize: SIZES.h2,
        color: "#404040",
        marginLeft: 12,
    },
    bellBox: {
        marginRight: 5,
        position: "relative",
    },
    notification: {
        position: "absolute",
        top: -7,
        right: -1,
        color: COLORS.red,
        fontWeight: "800",
    },
    main: {
        backgroundColor: COLORS.mediumBlue,
        borderRadius: 30,
        padding: "5%",
        marginTop: "5%",
    },
    mainTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        fontSize: SIZES.body3,
        color: COLORS.gray,
        marginBottom: 7,
        fontWeight: "700",
    },
    name: {
        fontSize: SIZES.h2,
        fontWeight: "700",
        color: "white",
        marginBottom: 10,
    },
    balanceBox: {

    },
    section: {
        marginTop: 50,
        alignItems: "flex-start",
    },
    title: {
        fontWeight: "800",
        fontSize: 16,
        padding: 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        marginBottom: 35,
        marginTop: 20,
    },
    object: {
        width: "20%",
        height: 80,
        alignItems: "center",
        padding: 0,
    },
    iconBox: {
        width: "85%",
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
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    promo: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: COLORS.mediumBlue,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "green",
        
    },
    boxWithShadow: {
        padding: 15,
        backgroundColor: COLORS.mediumBlue,
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        marginTop: 20,
        marginBottom: 50,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
    
})