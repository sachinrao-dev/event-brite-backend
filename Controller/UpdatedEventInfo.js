const event = require("../modals/EventSchema");

const UpdatedEventInfo = async (req, resp) => {
  const result = await event.updateOne(
    { _id: req.params.id },
    { $set: req.body },
  );
  resp.send(result);
};

module.exports = UpdatedEventInfo;
