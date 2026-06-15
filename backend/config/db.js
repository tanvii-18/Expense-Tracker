import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27018/expense-tracker");
    console.log("db connected!");
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "error in connecting database",
      error: error.message,
    });
  }
};
