const { ctrlWrapper } = require("../../helpers");

const register = require("./register");
const verifyEmail = require("./verifyEmail");
const login = require("./login.js");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

const authCtrls = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
};

module.exports = authCtrls;
