const { Contact } = require("../../models");
const { HttpError } = require('../../helpers');


const onDeleteContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findOneAndRemove({ owner, _id: id });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'Delete success' });
};

module.exports = onDeleteContact;
