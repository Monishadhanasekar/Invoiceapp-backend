const Product = require("../../models/productModel");

const GetProductsController = async (req, res) => {
  try {
    const productArray = await Product.find();
    res.send(productArray);
  } catch (e) {
    console.log(e.message, " err-in GetProductsController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = GetProductsController;
