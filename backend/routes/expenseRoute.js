import express from "express";
import { addExpense } from "../controllers/expenseController.js";

const expenseRoutes = express.Router();

expenseRoutes.post("/addExpense", addExpense);

export default expenseRoutes;
