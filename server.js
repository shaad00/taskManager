const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hola");
});

app.use("/api/v1/task", taskRoutes);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT : ${PORT}`);
});
