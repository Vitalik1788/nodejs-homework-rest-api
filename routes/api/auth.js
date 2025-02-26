const express = require("express");

const ctrl = require("../../controllers/ctrlAuth");

const { validateBody, authenticate, upload } = require('../../middlewares');
const { authSchema, usersSubscriptionSchema, verifyEmailSchema } = require('../../models/user');

const authRouter = express.Router();

authRouter.post('/register', validateBody(authSchema), ctrl.register);

authRouter.get('/users/verify/:verificationToken', ctrl.verifyEmail);

authRouter.post('/verify', validateBody(verifyEmailSchema), ctrl.resendVerifyLetter);

authRouter.post('/login', validateBody(authSchema), ctrl.login);

authRouter.get('/current', authenticate, ctrl.getCurrent);

authRouter.post('/logout', authenticate, ctrl.logout);

authRouter.patch('/users', authenticate, validateBody(usersSubscriptionSchema), ctrl.updateSubscription);

authRouter.patch('/users/avatars', authenticate, upload.single('avatar'), ctrl.onUpdateAvatar)

module.exports = authRouter;