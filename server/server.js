require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());          // allows the React app (a different port) to call this API
app.use(express.json());  // parses JSON request bodies into req.body

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});