const { router } = require("express");
const nodemailer = require("nodemailer");
const router = router();
/* --modulo-- */
router.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  contentHTML = `
<h1> User Iformation</h1>
 <ul> 
 <li>UserEmail: ${email} </li> 
 </ul>
 <p> ${message} </p> 
 `;
  console.log(contentHTML);

  const transporter = nodemailer.createTransport({

    host :,
    port:,
    secure:,
    auth:{
        type:,
        user:,
        pass:,
    },

    tls:{
        rejectUnauthorized: false,
    }
  });

  const info = await transporte.senMail({

      form:,
      to:,
      subject:,
      html:,
  });
  console.log('message sent',info.massageId);
  res.redirect('')

});

module.exports = router;
/* --modulo-- */ 


