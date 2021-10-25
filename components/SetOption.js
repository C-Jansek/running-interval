import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";

export default function SetOption(props) {
    const [optionValue, setOptionValue] = useState(props.defaultValue);

    return (
        <View style={[styles.wrapper, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.numberInput}>
                <NumericInput
                    rounded
                    value={optionValue}
                    minValue={props.minValue}
                    // maxValue={props.maxValue}
                    onChange={(value) => setOptionValue(value)}
                />
            </View>
        </View>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 14,
        color: '#5f5f5f'
    },
    numberInput: {
        // backgroundColor: "#ddd",
    },
};
