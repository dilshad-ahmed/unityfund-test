const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
// custom modules
const home = require("./src/routes/home.route");
const checkout = require("./src/routes/checkout.route");
app.use("/api/v1", home);
app.use("/api/v1", checkout);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
