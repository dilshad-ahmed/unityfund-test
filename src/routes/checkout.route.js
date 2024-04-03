const { checkout } = require("../controllers/checkout.controller");

const router = require("express").Router();

router.post("/checkout", checkout);

module.exports = router;
