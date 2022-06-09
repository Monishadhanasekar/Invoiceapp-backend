const Product = require("../../models/productModel");

const DeleteProductController = async (req, res) => {
  const { id } = req.params;
  
  try {
    const productAvailable = await Product.findById(id);
    if (!productAvailable) {
      return res.status(404).send({ msg: "no product found", type: "error" });
    }

    await Product.deleteOne({ _id: id });
    res.send({ msg: "deleted product", type: "success" });
  } catch (e) {
    console.log(e.message, " err-in DeleteProductController");
    res.status(500).send({ msg: e.message, type: "failed" });
  }
};

module.exports = DeleteProductController;


