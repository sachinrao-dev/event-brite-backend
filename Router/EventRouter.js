const express = require("express");
const EventLogin = require("../Controller/Login");
const EventList = require("../Controller/Event");
const AllEvent = require("../Controller/insertData");
const deleteData = require("../Controller/DeleteEvent");
const getList = require("../Controller/UpdateEvent");
const updatedEventInfo = require("../Controller/UpdatedEventInfo");
// const Error = require("../middleware/ErrorHandler");

const router = express.Router();
router.route("/login/:token").get(EventLogin);
router.route("/list").get(EventList);
router.route("/create").post(AllEvent);
router.route("/delete/:id").delete(deleteData);
router.route("/update/:id").get(getList);
router.route("/updatedEvent/:id").put(updatedEventInfo);

module.exports = router;
