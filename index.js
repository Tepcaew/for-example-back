require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "images")));
app.use(require("./routes/user.route"));
app.use(require("./routes/categories.route"));

mongoose.connect(process.env.MONGO_SERVER);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
