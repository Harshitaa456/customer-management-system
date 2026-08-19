Fconst express = require("express");
const cors = require("cors");
const authRoutes = require("./Routes/auth");
const customerRoutes = require("./Routes/customer");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Aventra CRM API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


