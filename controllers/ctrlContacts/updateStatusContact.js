const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const updateStatusContact = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const body = req.body;
  const bodyIsEmpty = !Object.keys(body).length;
  if (bodyIsEmpty) {
    return res.status(400).json({ message: 'missing field favorite' });
  }
  const result = await Contact.findOneAndUpdate({ owner, _id: id }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = updateStatusContact;
