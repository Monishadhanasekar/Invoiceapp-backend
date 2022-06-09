const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const ProductCrudRoute = require("./routes/ProductCrudRoute");
const InvoiceCrudRoute = require("./routes/InvoiceCrudRoute");

app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/crud/product", ProductCrudRoute);
app.use("/api/crud/invoice", InvoiceCrudRoute);

const dbConnectFunc = require("./db/dbConnect");
dbConnectFunc()
  .then(() =>
    app.listen(process.env.PORT || 4080, () => {
      console.log("Server Started");
    })
  )
  .catch((e) => console.log(e.message, " ERR-index.js"));

