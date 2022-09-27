const { application } = require('express');
const nodemailer = require('nodemailer')

const router = require('express').Router();

// ##################################################################################
// ##################################################################################
router.post("/sendemail",async (req, res) => {
  console.log("sent");
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dianna.russel@ethereal.email',
        pass: 'HRuuQpN8XY8fXYN1yu'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Dianna Foo 👻" dianna.russel@ethereal.email', // sender address
    to: "dianna.russel@ethereal.email", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
})


module.exports = router;
