import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/expense-tracker");
    console.log("db connected!");
  } catch (error) {
    console.log("error in connecting database", error.message);
  }
};
