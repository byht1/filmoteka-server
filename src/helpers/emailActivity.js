const nodemailer = require("nodemailer");

const { EMAIL_PASSWORD } = process.env;

const emailActivity = async (email, url) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "test.server.byht1@gmail.com",
      pass: `${EMAIL_PASSWORD}`,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const emailOptions = {
    from: "test.server.byht1@gmail.com",
    to: `${email}`,
    subject: "Підтвердження пошти на сайті Filmoteca",
    html: `
    <div>
    <h1>Підтвердження пошти на сайті Filmoteca</h1>
    <span>Для підтвердження перейдіть  <a href="https://filmoteka-server.herokuapp.com/user/activate/${url}">за посиланням</a></span>
    </div>
    `,
  };

  transporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));
};

module.exports = emailActivity;
