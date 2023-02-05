const Event = require("../modals/EventSchema");

const AllEvent = async (req, resp) => {
  const eventList = await Event.find({});
  resp.status(200).json(eventList);
};

module.exports = AllEvent;
