import mongoose from "mongoose";
import { expenseCollection } from "../models/expenseModel.js";

export const addExpense = async (req, res) => {
  const { expenseName, expenseAmt, category, expenseType, description } =
    req.body;
  try {
    const expenses = await expenseCollection.create({
      expenseName,
      expenseAmt,
      category,
      expenseType,
      description,
    });

    console.log(expenses);

    return res
      .status(200)
      .json({ status: true, message: "Expense added successfully!" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Can't Add Expense.",
      error: error.message,
    });

    console.log(error.message);
  }
};

export const readExpenses = async (req, res) => {
  try {
    const allData = await expenseCollection.find({});

    return res
      .status(200)
      .json({ status: true, message: "find data successfully", allData });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: false, message: "No Expenses Found!" });
  }
};

export const updateExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await expenseCollection.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
    );

    if (!data) {
      return res
        .status(404)
        .json({ status: false, message: "Expense Not Found!" });
    }

    return res
      .status(200)
      .json({ status: true, message: "Data Updated Successfully!" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: false, message: "Can't Update Expense" });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await expenseCollection.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ status: false, message: "data not found" });
    }
    return res
      .status(200)
      .json({ status: true, message: "deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: false, message: "Can't delete Expense" });
  }
};
