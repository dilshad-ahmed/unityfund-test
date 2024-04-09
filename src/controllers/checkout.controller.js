const paymentApi = require("../api/payment.api");

const checkout = async (req, res) => {
  // res.send("checkout World");

  try {
    console.log("checkout World", req.body);
    // res.send(req.body);
    const { amount } = req.body;

    const invoice = await paymentApi.createInvoice(amount);
    console.log(invoice);
    res.json(invoice);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { checkout };
