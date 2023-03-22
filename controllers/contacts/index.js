const { ctrlWrapper } = require("../../helpers");

const add = require("./add");
const deleteContact = require("./deleteContact");
const getAll = require("./getAll");
const getById = require("./getById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

const contactsCtrls = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteContact: ctrlWrapper(deleteContact),
};

module.exports = contactsCtrls;
