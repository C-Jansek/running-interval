import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Break(props) {
    return (
        <View style={[styles.wrapper, props.style]}>
            <Pressable onPress={props.handleExpand}>
                <View
                    style={
                        props.expanded ? styles.headerExpanded : styles.header
                    }
                >
                    <Text style={styles.headerText}>Set #{props.no}</Text>
                    <Text style={styles.headerText}>{props.duration}s</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = {
    wrapper: {
        backgroundColor: "#444",
        padding: 15,
        borderRadius: 8,
        width: "70%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontSize: 16,
        color: "#f5f5f5"
    },
};
