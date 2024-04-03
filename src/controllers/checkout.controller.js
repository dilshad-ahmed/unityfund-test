const checkout = async (req, res) => {
  // res.send("checkout World");

  try {
    console.log("checkout World", req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { checkout };
