const express = require('express');
const contactRouter = express.Router();

const controller = require("../../controllers/ctrlContacts");

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require("../../models");

contactRouter.get('/', authenticate, controller.onGetAllContacts);

contactRouter.get('/:id', authenticate, isValidId, controller.onGetContactById);

contactRouter.post('/', authenticate, validateBody(schemas.addSchema), controller.onAddNewContact);

contactRouter.put('/:id', authenticate, isValidId, validateBody(schemas.addSchema), controller.onUpdateContact);

contactRouter.patch('/:id/favorite', authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), controller.updateStatusContact);

contactRouter.delete('/:id', authenticate, isValidId, controller.onDeleteContact);

module.exports = contactRouter;
