const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercise: [
        {
            name: {
                type: String,
                trime: true,
                required: [true, "You must enter the name of the exercise."]
            },
            type: {
                type: String,
                trim: true,
                required: [true, "You must enter the exercise type."]
            },
            duration: {
                type: Number,
                required: [true, "You must enter the duration of the exercise, in minutes."]
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

module.exports = model("Workout", WorkoutSchema);