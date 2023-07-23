const { controllerWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrentUser');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const onUpdateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyLetter = require('./getCurrentUser');

module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logout: controllerWrapper(logout),
  updateSubscription: controllerWrapper(updateSubscription),
  onUpdateAvatar: controllerWrapper(onUpdateAvatar),
  verifyEmail: controllerWrapper(verifyEmail),
  resendVerifyLetter: controllerWrapper(resendVerifyLetter),
};
