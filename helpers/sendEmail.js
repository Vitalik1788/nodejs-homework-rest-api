const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const onSendEmail = async (data) => {
  const email = { ...data, from: "tarasenkovitalii.dev@gmail.com" };
  await sgMail.send(email);
  return true;
}

module.exports = onSendEmail;

