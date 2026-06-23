import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    expenseName: {
      type: String,
      required: true,
    },
    expenseAmt: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Food",
        "Transportation",
        "Entertainment",
        "Shopping",
        "Utilities",
        "Healthcare",
        "Other",
      ],
    },
    description: {
      type: String,
      trim: true,
      maxlength: 255,
    },
    expenseType: {
      type: String,
      enum: ["Needs", "Wants", "Savings", "Investment", "unnecessary"],
    },
  },
  { timestamps: true },
);

export const expenseCollection = mongoose.model("expenseSchema", expenseSchema);
