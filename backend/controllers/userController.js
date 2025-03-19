// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// exports.register = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ message: "The user already exist" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     res.status(201).json({ message: "User successfully registered" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User don´t find" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Incorrect Password" });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(400).json({ message: "The user already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();
      res.status(201).json({ message: "User successfully registered" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Incorrect password" });

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default userController;
