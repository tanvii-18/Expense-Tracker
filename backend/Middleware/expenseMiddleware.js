import { expenseCollection } from "../models/expenseModel.js";

export const checkExpenseData = (req, res, next) => {
  const { expenseName, expenseAmt, category, expenseType, description } =
    req.body;
  if (!expenseName || !expenseAmt || !category) {
    return res.status(400).json({
      status: false,
      message:
        "Informations like Name of Expense, Amount & Category are Require!",
    });
  }
  next();
};
