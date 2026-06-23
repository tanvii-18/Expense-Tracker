import express from "express";
import { connectDB } from "./config/db.js";
import expenseRoutes from "./routes/expenseRoute.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/expenses", expenseRoutes);

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
