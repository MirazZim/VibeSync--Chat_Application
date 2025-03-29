//external imports
const express = require("express");

//internal imports
const {getLogin} = require("../controller/loginController");

const router = express.Router();

//login Page
router.get("/", getLogin);

module.exports = router;

