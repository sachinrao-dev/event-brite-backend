const event = require("../modals/EventSchema");

const updateEvent = async (req, resp) => {
  const result = await event.find({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
};

module.exports = updateEvent;
