require('dotenv').config();
const express = require("express");
const cors = require("cors");
const port  = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/DB");

connectDB();

app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is live"
  })
})

app.use(cors());
app.use(express.json());

const route = require("./routes/route");
app.use("/api",route);

app.listen(port, () => {
  console.log("Server is running on port", port);

})