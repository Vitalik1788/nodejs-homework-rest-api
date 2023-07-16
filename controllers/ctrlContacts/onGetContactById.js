const { Contact } = require('../../models');
const { HttpError } = require('../../helpers');

const onGetContactById = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const result = await Contact.findOne({ owner, _id: id });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = onGetContactById;
