const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
require('dotenv').config();


const { User } = require('../../models');
const { HttpError, onSendEmail } = require('../../helpers');
const { BASE_URL } = process.env; 

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const createHashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: 'Please verify your email',
    html: `<h1>Hello, thank you for registration!</h1><p>Follow this link to verify your email address.</p><a href='${BASE_URL}/api/auth/users/verify/${verificationToken}'>Click here to confirm your email</a>`,
  };

  await onSendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: 'starter',
    },
  });
};

module.exports = register;
