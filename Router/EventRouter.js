const express = require("express");
const EventLogin = require("../Controller/Login");
const EventList = require("../Controller/Event");

// const Error = require("../middleware/ErrorHandler");

const router = express.Router();
router.route("/login/:token").get(EventLogin);
router.route("/list").get(EventList);

module.exports = router;
