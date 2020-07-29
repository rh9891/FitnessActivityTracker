const Workout = ("../models/Workout");

module.exports = (app) => {
// Referencing the api.js file, the following API routes are needed:


// The GET route for "/api/workouts/"
app.get("api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err)
    });
});

// The POST route for "/api/workouts/" to create the workout.
app.post("api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout =>
        res.json(dbWorkout))
    .catch(err => {
        res.json(err);
    });
});


// The GET route for "/api/workouts/range"
app.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
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

// Need to be able to find the workout and update it.
app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
}