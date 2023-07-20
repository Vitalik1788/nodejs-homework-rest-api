const { controllerWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrentUser');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const onUpdateAvatar = require('./updateAvatar');

module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logout: controllerWrapper(logout),
  updateSubscription: controllerWrapper(updateSubscription),
  onUpdateAvatar: controllerWrapper(onUpdateAvatar),
};
