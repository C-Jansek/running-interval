/**
 * Workout.
 * @typedef {Object} Workout
 * @property {string} title - Title for the workout.
 * @property {string} [description] - Short description of the contents of the workout and its use case(s).
 * @property {ExerciseBlock[]} exercises - All the exercises, in order, that are part of the workout.
 */

/**
 * Exercise.
 * @typedef {Object} ExerciseBlock
 * @property {string} title - Title for the exercise.
 * @property {string} [description] - Short description of the contents of the exercise and its use case(s).
 * @property {Object} options - Exercise specific options or settings.
 * @property {ExerciseExec} exec - Callback for running the exercise when part of a Workout.
 */

/**
 * Exercise executor.
 * This function will run the exercise when the exercise is part of a Workout.
 * @callback ExerciseExec
 */
