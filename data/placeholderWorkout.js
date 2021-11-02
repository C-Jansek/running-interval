const workoutExercisesTemplates = [
    {
        title: 'Sprinting Interval',
        type: 'sprint-interval',
        description:
            'Sprinting interval exercise that consists of short bursts of sprinting, alternating with slowly running.',
        exec: () => {
            // Function for running the exercise when part of a Workout
        },
        options: {
            reps: 4,
            sprintingDuration: 6,
            restDuration: 12,
        },
    },
    {
        title: 'Sprinting Interval',
        type: 'sprint-interval',
        description:
            'Sprinting interval exercise that consists of short bursts of sprinting, alternating with slowly running.',
        exec: () => {
            // Function for running the exercise when part of a Workout
        },
        options: {
            reps: 5,
            sprintingDuration: 5,
            restDuration: 10,
        },
    },
];

const breakTemplate = {
    title: 'Break',
    type: 'break',
    exec: () => {
        // Function for running the exercise when part of a Workout
    },
    options: {
        breakDuration: 45,
    },
};

const workoutTemplate = {
    title: 'Sprinting Interval Workout',
    description:
        'Workout for training short distance speed, reaction time and recuperation.',
    exercises: [
        workoutExercisesTemplates[0],
        breakTemplate,
        workoutExercisesTemplates[1],
    ],
};

export default workoutTemplate;
