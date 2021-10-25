import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Set from "./components/Set";

export default function App() {
    const [sets, setSets] = useState([
        {
            no: 1,
            expanded: true,
        },
        {
            no: 2,
            expanded: false,
        },
    ]);

    const toggleExpansion = (set) => {
        set.expanded = !set.expanded;
        let output = [...sets]
        output.map((s) => {
            if (s.no === set.no) {
                return set;
            }
            return s;
        })
        setSets(output)
    };

    return (
        <View style={styles.container}>
            {sets.map((set) => {
                return (
                    <Set
                        style={styles.setIndividual}
                        no={set.no}
                        key={set.no}
                        handleExpand={() => toggleExpansion(set)}
                        expanded={sets.find((s) => s.no === set.no).expanded}
                    ></Set>
                );
            })}
        </View>
    );
}

const styles = {
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        padding: 20,
        backgroundColor: "#202024",
    },
    setIndividual: {
        marginTop: 10,
        marginBottom: 10,
    }
};
