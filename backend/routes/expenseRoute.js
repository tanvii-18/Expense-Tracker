import express from "express";
import { addExpense, readExpenses } from "../controllers/expenseController.js";

const expenseRoutes = express.Router();

expenseRoutes.get("/getExpense", readExpenses);

expenseRoutes.post("/addExpense", addExpense);

export default expenseRoutes;
