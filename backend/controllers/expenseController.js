import { expenseCollection } from "../models/expenseModel.js";

export const addExpense = async (req, res) => {
  try {
    const expenses = await expenseCollection.create(req.body);

    console.log(expenses);

    // if (!expenseName || !expenseAmt || !category) {
    //   return res.status(400).json({
    //     status: false,
    //     message:
    //       "Informations like Name of Expense, Amount & Category are Require!",
    //   });
    // }
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
