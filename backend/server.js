import express from "express";

// express app
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to dark side!" });
})

// listen for requests
app.listen(4000, () => {
    console.log('listening on port 4000');
})