const { controllerWrapper } = require('../../helpers');

const onGetAllContacts = require('./onGetAllContacts');
const onGetContactById = require('./onGetContactById');
const onAddNewContact = require('./onAddNewContact');
const onUpdateContact = require('./onUpdateContact');
const updateStatusContact = require('./updateStatusContact');
const onDeleteContact = require('./onDeleteContact');

module.exports = {
  onGetAllContacts: controllerWrapper(onGetAllContacts),
  onGetContactById: controllerWrapper(onGetContactById),
  onAddNewContact: controllerWrapper(onAddNewContact),
  onUpdateContact: controllerWrapper(onUpdateContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
  onDeleteContact: controllerWrapper(onDeleteContact),
};
