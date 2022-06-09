const Invoice = require("../../models/invoiceModel");

const GetAllInvoiceController = async (req, res) => {
  try {
    const invoiceArray = await Invoice.find();
    if (invoiceArray.length < 1) {
      return res.status(404).send({ msg: "No invoices Found", type: "error" });
    }
    res.send(invoiceArray);
  } catch (e) {
    console.log(e.message, " err-in GetAllInvoiceController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = GetAllInvoiceController;
