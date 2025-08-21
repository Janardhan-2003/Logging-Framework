const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const logRoutes = require("./routes/logs.routes");
const appRoutes=require('./routes/apiRoutes')
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use("/api/logs", logRoutes);
app.use("/api/apps", appRoutes);

app.listen(PORT, () => {
  console.log("Server running on PORT 5000.....!!!");
});
