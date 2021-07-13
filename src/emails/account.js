// const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = "myapi"

// sgMail.setApiKey(sendgridAPIKey)

// sgMail.send({
//   to: 'ol.sadomov@gmail.com',
//   from: 'ol.sadomov@gmail.com',
//   subject: 'This is my first creation!',
//   text: 'I hope this one actually get to you.'
// })

// const sendWelcomeEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: 'fdferg.erbhrtb@bk.ru',
//     subject: 'Thanks for joining in!',
//     text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
//   })
// }

// module.exports = {
//   sendWelcomeEmail
// } Andrew

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'slavejuster@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

const sendWelcomeEmail = (email, name) => {
  transporter.sendMail({
    to: email,
    from: 'slavejuster@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  transporter.sendMail({
    to: email,
    from: 'slavejuster@gmail.com',
    subject: `Goodbye, ${name}!`,
    text: `Why are you leaving us?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

// var mailOptions = {
//   from: 'slavejuster@gmail.com',
//   to: 'fdferg.erbhrtb@bk.ru',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });