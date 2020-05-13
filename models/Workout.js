const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: [true, "You must enter the exercise type."]
            },
            name: {
                type: String,
                trime: true,
                required: [true, "You must enter the name of the exercise."]
            },
            duration: {
                type: Number,
                required: [true, "You must enter the duration of the exercise, in minutes."]
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

module.exports = model("Workout", WorkoutSchema);