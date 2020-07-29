const Workout = require("../models/Workout.js");
Workout.collection.drop();

module.exports = (app) => {
// The GET route for "/api/workouts/"
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

// The POST route for "/api/workouts/" to create the workout.
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

// The GET route for "/api/workouts/range"
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

app.post("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Need to be able to find the last workout and update it.
app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true, runValidators: true})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
}