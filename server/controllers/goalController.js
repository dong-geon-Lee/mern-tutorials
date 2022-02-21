const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

const setGoal = asyncHandler((req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field!");
  }

  res.status(200).json({ message: "Set goal" });
});

const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
