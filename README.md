# running-interval

## Installation

1. Clone this repo

    ```bash
    git clone git@github.com:C-Jansek/running-interval
    ```

2. Make sure you have the expo-cli installed

    ```bash
    expo --version
    ```

    Otherwise, install it globally

    ```bash
    npm i -g expo
    ```

3. Install dependencies
    ```bash
    npm install
    ```
4. Run the dev server
    ```bash
    npm run start
    ```

## Project Roadmap

App displays a Workout. Each workout consists of Exercise blocks. These exercise blocks can contain different options to customize the exercise. When the Workout is started, the exercise-blocks are executed one-by-one, according to the ExerciseExec function that is specified for each exercise.

### Data model

```json

Workout = {
    "title" : "Sprinting Interval Workout",
    "description" : "Workout for training short distance speed, reaction time and recuperation.",
    "exercises" : [
        // Array of Exercise-blocks
    ]
}

ExerciseBlock = {
    "title" : "Sprinting Interval",
    "description" : "Sprinting interval exercise that consists of short bursts of sprinting, alternating with slowly running.",
    "exec" : () => {
        // Function for running the exercise when part of a Workout
    },
    "options" : {
        // Object that contains the exercise specific options or settings
        "reps" : 4,
        "sprintingDuration" : 6,
        "restDuration" : 12,
    }
}

```

```js

```
