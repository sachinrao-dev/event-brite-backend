const express = require("express");
const EventLogin = require("../Controller/Event");

const router = express.Router();
router.route("/").get(EventLogin);

module.exports = router;
