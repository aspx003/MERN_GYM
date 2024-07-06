const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `Invalid id ${id}` });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res
      .status(404)
      .json({ error: "The requested workout was not found" });
  }

  res.status(200).json(workout);
};

// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // adding to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `Invalid id ${id}` });
  }

  const workout = await Workout.findByIdAndUpdate(id, { ...req.body });

  if (!workout) {
    return res
      .status(400)
      .json({ error: "The requested workout was not found" });
  }

  res.status(200).json(workout);
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: `Invalid id ${id}` });
  }

  const workout = await Workout.findByIdAndDelete(id);

  if (!workout) {
    return res
      .status(404)
      .json({ error: "The requested workout was not found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getSingleWorkout,
  getAllWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
