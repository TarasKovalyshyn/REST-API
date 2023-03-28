const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "kovalyshyn1995@ukr.net" };
  await sgMail.send(email);
  return true;
};
module.exports = sendEmail;
// const email={
//   to: "taras.kovalyshyn@gmail.com",
//   from: "kovalyshyn1995@ukr.net",
//   subject: "Test email",
//   html: "<p> <strong>Test email</strong> from localhost:3000</p>"
// }

// sgMail.send(email)
// .then(()=> console.log("Email send success"))
// .catch(error=> console.log(error.message))