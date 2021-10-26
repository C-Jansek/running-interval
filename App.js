import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Set from './components/Set';
import Break from './components/Break';
import themeStyle from './styles/theme.style';

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
        const newSet = set;
        newSet.expanded = !newSet.expanded;
        const output = [...sets];
        output.map((s) => {
            if (s.id === newSet.id) {
                return newSet;
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
                        key={`set-${set.id}`}
                        handleExpand={() => toggleExpansion(set)}
                        expanded={sets.find((s) => s.id === set.id).expanded}
                        defaultSprintingDuration={
                            options.defaultSprintingDuration
                        }
                        defaultRestDuration={options.defaultRestDuration}
                        defaultReps={options.defaultReps}
                    />
                );
                let breakRender = breaks.find((b) => b.id === set.id);
                if (breakRender) {
                    breakRender = (
                        <Break
                            style={styles.setIndividual}
                            key={`break-${breakRender.id}`}
                            duration={breakRender.breakDuration}
                        />
                    );
                }
                return breakRender ? [setRender, breakRender] : setRender;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        padding: 20,
        backgroundColor: themeStyle.color.almostBlack,
    },
    setIndividual: {
        marginTop: 10,
        marginBottom: 10,
    },
});
