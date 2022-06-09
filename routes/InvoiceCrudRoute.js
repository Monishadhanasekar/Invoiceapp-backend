const router = require("express").Router();

const GetAllInvoiceController = require("../controllers/invoice/GetAllInvoiceController");
const CreateInvoiceController = require("../controllers/invoice/CreateInvoiceController");
const DeleteInvoiceController = require("../controllers/invoice/DeleteInvoiceController");

//getAll invoices
router.get("/", GetAllInvoiceController);

//create invoice
router.post("/", CreateInvoiceController);

//delete invoice
router.delete("/:id", DeleteInvoiceController);

module.exports = router;
