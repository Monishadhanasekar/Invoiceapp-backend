const Invoice = require("../../models/invoiceModel");
const Product = require("../../models/productModel");

const CreateInvoiceController = async (req, res) => {
  const {
    Name,
    Address,
    clientName,
    cashierName,
    invoiceNo,
    invoiceDate,
    productName,
    qty,
    price,
    
  } = req.body;
  try {

    //change stock qty in product collection
    const changeQty = await Product.findOne({ productName });
    const diff = changeQty.stockQuantity - qty;
    changeQty.stockQuantity = parseInt(diff);
    await changeQty.save();

    const createdInvoice = await Invoice.create({
    Name,
    Address,
    clientName,
    cashierName,
    invoiceNo,
    invoiceDate,
    productName,
    qty,
    price
    });
    if (!createdInvoice) {
      return res
        .status(400)
        .send({ msg: "couldnot create Invoice...,try again", type: "error" });
    }
    res.send(
      createdInvoice
    );
  } catch (e) {
    console.log(e.message, " err-in CreateInvoiceController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = CreateInvoiceController;
