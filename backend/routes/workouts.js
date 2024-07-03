const express = require('express');

const router =  express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({message: "GET all workouts!"})
});

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({message: "GET single workout!"})
});

// CREATE a new workout
router.post('/', (req, res) => {
    res.json({message: "POST a workout!"})
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE a workout!"})
});

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE a workout!"})
});

module.exports = router;