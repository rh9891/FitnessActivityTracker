const Workout = require("../models/Workout.js");
// Workout.collection.drop();

module.exports = (app) => {
// The GET route for all of the workouts.
app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, dbWorkout) => {
        if(err) {
            console.log(err);
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
});

// The POST route to create the workout.
app.post("/api/workouts", (req, res) => {
    Workout.create({}, (err, dbWorkout) => {
        if(err) {
            console.log(err);
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
});

// The GET route.
app.get("/api/workouts/range", (req, res) => {
    Workout.find({}, (err, dbWorkout) => {
        if(err) {
            console.log(err);
        } else {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }
    });
});

// The POST route.
app.post("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Route to "find" the last workout and update it. The route also calculates the total duration of the exercises of a workout.
app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body }, $inc: { totalDuration: req.body.duration } },
        { new: true, runValidators: true})
        .then(dbWorkout => {
            console.log(req.body);
            console.log(req.body.duration);
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
}