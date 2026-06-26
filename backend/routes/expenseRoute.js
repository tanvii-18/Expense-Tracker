import express from "express";
import {
  addExpense,
  deleteExpense,
  findByCategory,
  readExpenses,
  updateExpense,
} from "../controllers/expenseController.js";
import { checkExpenseData } from "../Middleware/expenseMiddleware.js";

const expenseRoutes = express.Router();

expenseRoutes.get("/getExpense", readExpenses);
expenseRoutes.get("/category/:category", findByCategory);

expenseRoutes.post("/addExpense", checkExpenseData, addExpense);

expenseRoutes.put("/editExpense/:id", checkExpenseData, updateExpense);

expenseRoutes.delete("/deleteExpense/:id", deleteExpense);

export default expenseRoutes;
