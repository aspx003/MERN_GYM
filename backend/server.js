const express = require('express');
require('dotenv').config();
const workoutRoutes = require("./routes/workouts.js")

// express app
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(PORT, () => {
    console.log('listening on port 4000');
})