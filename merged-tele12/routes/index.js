const { router } = require("express");
const nodemailer = require("nodemailer");
const router = router();

router.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  contentHTML = `
<h1> User Iformation</h1>
 <ul> 
 <li>UserEmail: ${email} </li> 
 </ul>
 <p> ${message} </p> 
 `;
  console.log("proceso completado");
});
