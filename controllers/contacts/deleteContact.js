const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  //   res.status(204).send(), або 40 рядок
  res.json({ message: "Delete success" });
};

module.exports = deleteContact;
