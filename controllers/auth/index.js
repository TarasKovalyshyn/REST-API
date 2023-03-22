const { ctrlWrapper } = require("../../helpers");

const register = require("./register");
const login = register("./login.js");
const getCurrent = require("./getCurrent");
const logout = require("./logout");

const authCtrls = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};

module.exports = authCtrls;
