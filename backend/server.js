// dotenv.config();
// dbConnection();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/tasks", import("./routes/taskRoutes.js"));
// app.use("/api/users", import("./routes/userRoutes.js"));

// app.listen(5000, () => console.log("Server running on port 5000"))

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
