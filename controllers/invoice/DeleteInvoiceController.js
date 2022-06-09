const Invoice = require("../../models/invoiceModel");

const DeleteInvoiceController = async (req, res) => {
  const { id } = req.params;
  try {
    const invoiceAvailable = await Invoice.findById(id);
    if (!invoiceAvailable) {
      return res.status(404).send({ msg: "no invoice found", type: "error" });
    }
    await Invoice.deleteOne({ _id: id });
    res.send({ msg: "deleted invoice successfully", type: "success" });
  } catch (e) {
    console.log(e.message, " err-in DeleteInvoiceController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = DeleteInvoiceController;
