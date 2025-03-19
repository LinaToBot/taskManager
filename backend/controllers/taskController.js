import Task from "../models/Task.js";

const taskController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find();

      const transformedTasks = tasks.map((task) => ({
        id: task._id.toString(),
        title: task.title,
        status: task.status,
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
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!task) return res.status(404).json({ message: "Task not found" });

      res.json({ id: task._id.toString(), ...task._doc });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });

      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default taskController;
