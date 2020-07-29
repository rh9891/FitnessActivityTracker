const db = require("./models");

module.exports = () => {
// Referencing the api.js file, the following API routes are needed:


// The GET route for "/api/workouts/"
app.get("api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err)
    });
});

// The PUT route for "/api/workouts/"


// The POST route for "/api/workouts/" to create the workout.
app.post("api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then((dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});


// The GET route for "/api/workouts/range"


// Need to be able to find the workout and update it.
}