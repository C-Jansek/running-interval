import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Set from "./components/Set";
import Break from "./components/Break";

export default function App() {
    const [options, setOptions] = useState({
        defaultSprintingDuration: 5,
        defaultRestDuration: 10,
        defaultReps: 5,
        defaultBreakDuration: 55,
    });

    const [sets, setSets] = useState([
        {
            id: 1,
            expanded: true,
        },
        {
            id: 2,
            expanded: false,
        },
    ]);

    const [breaks, setBreaks] = useState([
        {
            id: 1,
            breakDuration: 55,
        },
    ]);

    const toggleExpansion = (set) => {
        set.expanded = !set.expanded;
        let output = [...sets];
        output.map((s) => {
            if (s.id === set.id) {
                return set;
            }
            return s;
        });
        setSets(output);
    };

    return (
        <View style={styles.container}>
            {sets.map((set) => {
                const setRender = (
                    <Set
                        style={styles.setIndividual}
                        setNumber={set.id}
                        key={"set-" + set.id}
                        handleExpand={() => toggleExpansion(set)}
                        expanded={sets.find((s) => s.id === set.id).expanded}
                        defaultSprintingDuration={options.defaultSprintingDuration}
                        defaultRestDuration={options.defaultRestDuration}
                        defaultReps={options.defaultReps}
                    ></Set>
                );
                let breakRender = breaks.find((b) => b.id === set.id);
                {
                    breakRender &&
                        (breakRender = (
                            <Break
                                style={styles.setIndividual}
                                key={"break-" + breakRender.id}
                                duration={breakRender.breakDuration}
                            ></Break>
                        ));
                }
                return breakRender ? [setRender, breakRender] : setRender;
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
    },
};
