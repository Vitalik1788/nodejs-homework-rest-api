const express = require("express");

const ctrl = require("../../controllers/ctrlAuth");

const { validateBody, authenticate } = require('../../middlewares');
const { authSchema, usersSubscriptionSchema } = require('../../models/user');

const authRouter = express.Router();

authRouter.post('/register', validateBody(authSchema), ctrl.register);

authRouter.post('/login', validateBody(authSchema), ctrl.login);

authRouter.get('/current', authenticate, ctrl.getCurrent);

authRouter.post('/logout', authenticate, ctrl.logout);

authRouter.patch('/users',authenticate,validateBody(usersSubscriptionSchema),ctrl.updateSubscription);

module.exports = authRouter;