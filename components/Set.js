import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
import SetOption from "./SetOption";

export default function Set(props) {
    return (
        <View style={[styles.wrapper, props.style]}>
            <Pressable onPress={props.handleExpand}>
                <View
                    style={
                        props.expanded ? styles.headerExpanded : styles.header
                    }
                >
                    <Text style={styles.headerText}>Set #{props.no}</Text>
                    <Icon
                        name={
                            props.expanded
                                ? "keyboard-arrow-up"
                                : "keyboard-arrow-down"
                        }
                    ></Icon>
                </View>
            </Pressable>
            {props.expanded && (
                <View style={styles.body}>
                    <SetOption
                        style={styles.setOption}
                        title="Sprinting Duration (s)"
                        defaultValue={5}
                        minValue={1}
                    ></SetOption>
                    <SetOption
                        style={styles.setOption}
                        title="Rest Duration (s)"
                        defaultValue={10}
                        minValue={1}
                    ></SetOption>
                    <SetOption
                        style={styles.setOption}
                        title="Reps"
                        defaultValue={5}
                        minValue={1}
                    ></SetOption>
                </View>
            )}
        </View>
    );
}

const styles = {
    wrapper: {
        backgroundColor: "#f2f2f2",
        padding: 15,
        borderRadius: 8,
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerExpanded: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        borderBottomWidth: "2px",
        borderBottomColor: "#c4c4c4",
    },
    headerText: {
        fontSize: 18,
    },
    body: {
        display: "flex",
    },
    setOption: {
        marginTop: 10,
    },
};
