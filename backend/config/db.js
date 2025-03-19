import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db MDB connected");
  } catch (error) {
    console.log(error, "error");
    process.exit(1);
  }
};

export default dbConnection;
