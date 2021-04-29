import {StyleSheet} from "react-native"
import { COLORS, FONTS , SIZES} from "../../../constants"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "4%",
    },
    title: {
        marginTop: "20%",
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center",
        color: COLORS.lightBlack,
    },
    title2: {
        marginTop: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categories: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.lightBlack,
    },
    timeBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    duration: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.mediumBlue,
    },
    arrowDown: {
        resizeMode: "contain",
        height: "100%",
        width: 20,
        marginLeft: 10,
    },
    section: {
        marginTop: 25,
    },
    category: {
        backgroundColor: "white",
        shadowColor: "#d9d9d9",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5,
        marginVertical: 7,
        borderRadius: 15,
        paddingHorizontal: 8,
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconBox: {
        marginRight: 10,
        width: 50,
        height: 40,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    mainIcon: {
        color: "red",
        width: "65%",
        height: "65%",
        resizeMode: "contain"
    },
    topic: {
        fontWeight: "700",
        fontSize: 16,
        color: COLORS.lightBlack,
    },
    right: {
        fontWeight: "700",
        color: "#ff531a"
    },
    rightImg: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    body: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopColor: COLORS.gray,
        borderTopWidth: 1,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        // borderColor: "blue",
        // borderWidth: 1,
    }
})