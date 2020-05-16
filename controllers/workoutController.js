const { Workout } = require("./../models/index")

module.exports = {
    // Used by api.js to get last workout
    getWorkout: async (req, res) => {
        try {
            const workout = await Workout.find()
            if (!workout) {
                return res.status(404).json({ error: "No workout found" });
            }
            return res.status(200).json(workout);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    //create new workout
    createWorkout: async(req,res) => {
        try{
            const exercise = await Workout.create({type: "workout"});
            return res.status(200).json(exercise);
        } catch (e) {
            console.log("Error creating workout.", e)
        }
    },
    getWorkoutsinRange: async (req, res) => {
        try {
            const workoutsInRange = await Workout.find({}).limit(7)
            if (!workoutsInRange) {
                return res.status(404).json({ error: "No workouts found" });
            }
            return res.status(200).json(workoutsInRange);
        } catch (e) {
            return res.status(403).json({ e });
        }
    }
};
