const express = require("express");
const EventLogin = require("../Controller/Event");
// const Error = require("../middleware/ErrorHandler");

const router = express.Router();
router.route("/login/:token").get(EventLogin);

module.exports = router;
