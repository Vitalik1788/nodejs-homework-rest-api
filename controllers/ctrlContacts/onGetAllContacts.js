const { Contact } = require('../../models/contact');

const onGetAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, '-createdAt', {
    skip,
    limit,
  }).populate('owner', 'email subscription');
  if (!favorite) {
    res.json(result);
  } else if (favorite) {
    const favoriteContacts = result.filter(
      contact => contact.favorite === true
    );
    res.json(favoriteContacts);
  }
};

module.exports = onGetAllContacts;
