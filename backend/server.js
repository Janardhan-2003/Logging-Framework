const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const router = require("./routes/logs.routes");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use("/api/logs", router);

app.listen(PORT, () => {
  console.log("Server running on PORT 5000.....!!!");
});
