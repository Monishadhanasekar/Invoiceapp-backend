const mongoose = require("mongoose");
const schema = mongoose.Schema;

const invoiceSchema = schema({
  Name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  cashierName: {
    type: String,
    required: true,
  },
  invoiceNo: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  productName: {
    type: String,
    required: true,
    maxLength: 25,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },  
});

const Invoice = mongoose.model("Invoice", invoiceSchema, "invoiceCollection");

module.exports = Invoice;
