const eventToken = require("../modals/TokenSchema");

const EventLogin = async (req, resp) => {
  const tokenVal = req.params.token;
  const [...data] = await eventToken.find({ token: tokenVal });
  const filterData = data.filter(
    (auth) => parseInt(tokenVal, 10) === auth.token,
  );
  resp.status(200).json(filterData);
};

module.exports = EventLogin;
