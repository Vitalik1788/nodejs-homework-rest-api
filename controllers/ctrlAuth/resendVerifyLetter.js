const { HttpError, onSendEmail } = require('../../helpers');
const { User } = require('../../models');
require('dotenv').config();

const { BASE_URL } = process.env;

const resendVerifyLetter = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, 'Email not found');
  }
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }
  const verifyEmail = {
    to: email,
    subject: 'Please verify your email',
    html: `<h1>Hello, thank you for registration!</h1><p>Follow this link to verify your email address.</p><a href='${BASE_URL}/api/auth/users/verify/${user.verificationToken}'>Click here to confirm your email</a>`,
  };

  await onSendEmail(verifyEmail);

  res.json({ message: 'Verification email sent' });
};

module.exports = resendVerifyLetter;
