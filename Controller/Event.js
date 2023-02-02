const eventToken = require("../modals/TokenSchema");

const EventLogin = async (req, resp) => {
  // console.log("HI i am in the router page");
  const data = await eventToken.find({});
  resp.status(200).json({ data });
};

module.exports = EventLogin;
