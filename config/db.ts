import mongoose, { Error } from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI!, {});
  } catch (error) {
    console.log("connection Error ", Error.messages);
  }
  const connection = mongoose.connection;
  if (connection.readyState >= 1) {
    console.log("connected to database");
    return;
  }
  connection.on("error", () => console.log("Connection failed"));
};

export default connectDB;
