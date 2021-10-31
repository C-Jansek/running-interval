import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

import Set from './components/Set';
import Break from './components/Break';
import themeStyle from './styles/theme.style';
import OptionChangerView from './components/OptionChangerView';

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
            setOptions: [
                {
                    value: 5,
                    minValue: 1,
                    maxValue: 99,
                    title: 'Sprinting Duration',
                    unit: 's',
                    description:
                        'The duration of every sprinting part of the exercise',
                    handlePress: (tmp) => {
                        openOptionChangerOverlay(tmp);
                    },
                },
                {
                    value: 10,
                    minValue: 1,
                    maxValue: 99,
                    title: 'Rest Duration',
                    unit: 's',
                    description:
                        'The duration of every resting part of the exercise',
                },
                {
                    value: 5,
                    minValue: 1,
                    maxValue: 99,
                    title: 'Reps',
                    description:
                        'The amount of times the sprinting part is part of the set',
                },
            ],
        },
        // {
        //     id: 2,
        //     expanded: false,
        // },
    ]);

    const openOptionChangerOverlay = (thisSetOptions) => {
        const overlayOptions = {
            value: thisSetOptions.value,
            minValue: thisSetOptions.minValue,
            maxValue: thisSetOptions.maxValue,
            title: thisSetOptions.title,
            description: thisSetOptions.description,
            isVisible: true,
            changeHandler: (tmp) => {
                const tmpValue = { ...optionChangerOverlay };
                tmpValue.value = tmp;
                setOptionChangerOverlay({ tmpValue });
            },
        };
        setOptionChangerOverlay(overlayOptions);
    };

    const [optionChangerOverlay, setOptionChangerOverlay] = useState({
        value: 1,
        minValue: 1,
        maxValue: 99,
        title: 'Sprinting Duration',
        description: 'The duration of every sprinting part of the exercise',
        isVisible: false,
    });

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
                        expanded={set.expanded}
                        setOptions={set.setOptions}
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
            <OptionChangerView
                isVisible={optionChangerOverlay.isVisible}
                title={optionChangerOverlay.title}
                description={optionChangerOverlay.description}
                handleBackdropPress={() => {
                    const tmp = optionChangerOverlay;
                    tmp.isVisible = false;
                    setOptionChangerOverlay(tmp);
                    console.log('disable overlay');
                }}
                value={optionChangerOverlay.value}
                minValue={optionChangerOverlay.minValue}
                maxValue={optionChangerOverlay.maxValue}
                changeHandler={optionChangerOverlay.changeHandler}
            >
                <NumericInput
                    value={optionChangerOverlay.value}
                    onChange={(value) => {
                        const tmp = optionChangerOverlay;
                        tmp.value = value;
                        setOptionChangerOverlay(tmp);
                    }}
                />
            </OptionChangerView>
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
