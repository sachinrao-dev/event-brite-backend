require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const router = require("./Router/EventRouter");
const mongooseDB = require("./db/connection");

const app = express();

const port = process.env.PORT || 7089;
mongooseDB(process.env.MONGOOSE_URL);

app.use(json());
app.use(cors());
app.use("/event", router);
app.listen(port);
