const { Workout } = require("./../models")

module.exports = {
    getWorkouts: async (req, res) => {
        try {
            const workouts = await Workout.find()
            if (!workouts) {
                return res.status(404).json({ error: "No workouts found" });
            }
            return res.status(200).json(workouts);
        } catch(e){
            return res.status(403).json({ e });
        }
    }
};