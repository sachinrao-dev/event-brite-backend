const Event = require("../modals/EventSchema");

const AllEvent = async (req, resp) => {
  const data = new Event(req.body);
  await data.save();
  resp.send("data posted");
};

module.exports = AllEvent;
