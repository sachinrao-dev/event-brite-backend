const event = require("../modals/EventSchema");

const DeleteEvent = async (req, resp) => {
  await event.deleteOne({ _id: req.params.id });
  resp.send("deleted data");
};

module.exports = DeleteEvent;
