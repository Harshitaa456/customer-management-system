const express = require("express");
const cors = require("cors");
const { clerkMiddleware } = require("@clerk/express");

const customerRoutes = require("./Routes/customer");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Aventra CRM API is running" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});