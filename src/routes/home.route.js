const { home } = require("../controllers/home.controller");

const router = require("express").Router();

router.get("/", home);

module.exports = router;
