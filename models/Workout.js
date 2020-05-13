const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    
})