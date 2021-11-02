import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Set from './components/Set';
import themeStyle from './styles/theme.style';
import './types/workout';

import placeholderWorkout from './data/placeholderWorkout';

export default function App() {
    const [workout, setWorkout] = useState(placeholderWorkout);
    return (
        <View style={styles.container}>
            {workout.exercises.map((exercise, index) => {
                console.log(exercise.options);
                const exerciseRender = (
                    <Set
                        style={styles.setIndividual}
                        title={exercise.title}
                        type={exercise.type}
                        options={exercise.options}
                    />
                );
                return exerciseRender;
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
