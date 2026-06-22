import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({});

export const expenseCollection = mongoose.model("expenseSchema", expenseSchema);
