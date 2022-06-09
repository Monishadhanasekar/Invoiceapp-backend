const Product = require("../../models/productModel");

const GetOneProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const productFound = await Product.findById(id);
    if (!productFound) {
      return res.status(404).send({ msg: "No product Found", type: "error" });
    }
    res.send({ productFound, msg: "product available", type: "success" });
  } catch (e) {
    console.log(e.message, " err-in GetOneProductController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = GetOneProductController;
