const nodemailer = require("nodemailer");

const emailActivity = async (email, url) => {
  const config = {
    host: "mail.adm.tools",
    port: 465,
    secure: true,
    auth: {
      user: "dykhal.vo@kriomedservice.com",
      pass: "27ZiuMB#3x^+",
    },
  };

  const transporter = nodemailer.createTransport(config);

  // const emailOptions = {
  //   from: "dykhal.vo@kriomedservice.com",
  //   to: `${email}`,
  //   subject: "Підтвердження пошти на сайті Filmoteca",
  //   html: `
  //   <div>
  //   <h1>Підтвердження пошти на сайті Filmoteca</h1>
  //   <span>Для підтвердження перейдіть  <a href="http://localhost:3000/user/activate/${url}">за посиланням</a></span>
  //   </div>
  //   `,
  // };
  const emailOptions = {
    from: "dykhal.vo@kriomedservice.com",
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
