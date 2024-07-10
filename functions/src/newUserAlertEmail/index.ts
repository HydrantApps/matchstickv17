//import * as logger from 'firebase-functions/logger';
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
  auth: {
    user: 'sample email',
    pass: 'sample password',
  },
  debug: true,
  logger: true,
});

// Email Invoice after Save
export const newUserEmailTrigger = functions.firestore
  .document('/users/{documentId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const mailOptions = {
      from: 'support@invoicer.me',
      to: 'josephnwachukwu@icloud.com',
      subject: `New User added`,
      text: `
      Hello Mr. Stark,\n
      ${data.displayName} has just Joined invoicer.me 
      Before you know it, You will be making a lot of money. 
  
      Best Regards,
      Joey Stark
      invoicer.me (The easiest way to send Expenses, Invoices and more!)
      `,
    };
    transporter.sendMail(mailOptions, (err: unknown, info: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return true;
  });
