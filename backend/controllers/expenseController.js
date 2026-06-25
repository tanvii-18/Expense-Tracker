import { expenseCollection } from "../models/expenseModel.js";

export const addExpense = async (req, res) => {
  const { expenseName, expenseAmt, category, expenseType, description } =
    req.body;
  try {
    if (!expenseName || !expenseAmt || !category) {
      return res.status(400).json({
        status: false,
        message:
          "Informations like Name of Expense, Amount & Category are Require!",
      });
    }
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
      .json({ status: true, message: "Expense added successfully!", expenses });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Can't Add Expense.",
      error: error.message,
    });

    console.log(error.message);
  }
};
