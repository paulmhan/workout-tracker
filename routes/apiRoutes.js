const router = require('express').Router();
const { getWorkouts } = require("./../controllers/workoutController");

// has /api prepended to it
router.route("/workouts")
    .get(getWorkouts)
    


