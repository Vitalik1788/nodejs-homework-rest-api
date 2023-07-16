const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const onUpdateContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findOneAndUpdate({ owner, _id: id }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = onUpdateContact;
