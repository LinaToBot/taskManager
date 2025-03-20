import Task from "../models/Task.js";

const taskController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ user: req.user.userId });

      const transformedTasks = tasks.map((task) => ({
        id: task._id.toString(),
        title: task.title,
        status: task.status,
        subtask: task.subtask,
        comments: task.comments,
      }));

      res.json(transformedTasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createTask: async (req, res) => {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: "pending",
      user: req.user.userId,
    });

    try {
      const newTask = await task.save();
      res.status(201).json({ id: newTask._id.toString(), ...newTask._doc });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { title } = req.body;

      const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.userId },
        { title },
        { new: true }
      );

      if (!task) return res.status(404).json({ message: "Task not found" });

      res.json({
        id: task._id.toString(),
        title: task.title,
        status: task.status,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete({
        _id: req.params.id,
        user: req.user.userId,
      });
      if (!task) return res.status(404).json({ message: "Task not found" });

      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default taskController;
