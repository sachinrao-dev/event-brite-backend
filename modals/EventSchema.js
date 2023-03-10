const mongoose = require("mongoose");

const CreateEventSchema = mongoose.Schema({
  event_name: {
    type: String,
    required: true,
  },
  event_description: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("event", CreateEventSchema);
