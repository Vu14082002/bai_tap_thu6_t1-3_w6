import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex2: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flex7: {
        backgroundColor: "#C4C4C4",
        padding: 10,
        flex: 7,
        justifyContent: "space-between",
    },
    lblTitle: {
        paddingTop: 20,
        fontSize: 15,
        fontWeight: "500",
        width: "66%",
    },
    lblBottom: {
        fontSize: 18,
        fontWeight: "500",
    },
    box: {
        width: 85,
        height: 85,
        marginVertical: 7,
    },
    btn: {
        height: 44,
        borderRadius: 10,
        backgroundColor: "#1952E294",
        paddingHorizontal: 20,
    },
    lblBtn: {
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 44,
        textAlign: "center",
        color: "#ffff",
    },
});
