const Workout = require("../models/Workout.js");

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
    // .populate("exercises")
    // .then(dbWorkout => {
    //     res.json(dbWorkout)
    // }).catch(err => {
    //     res.json(err)
    // });
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
    // .populate("exercises")
    // .then(dbWorkout =>
    //     res.json(dbWorkout))
    // .catch(err => {
    //     res.json(err);
    // });
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
    // .populate("exercises")
    // .then(dbWorkout => {
    //     console.log(dbWorkout);
    //     res.json(dbWorkout);
    // }).catch(err => {
    //     res.json(err);
    // });
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
        { id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true })
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
}