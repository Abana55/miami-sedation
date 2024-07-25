import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, doctor, message, callbackDate, callbackTime } = req.body;

    // Configure the transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER, // Send email from your generic email address
      to: process.env.OFFICE_EMAIL, // Send email to office email address
      subject: 'New Consultation Request',
      text: `You have a new consultation request from:
      
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Doctor: ${doctor}
      Message:
      ${message}
      
      Callback Date: ${callbackDate}
      Callback Time: ${callbackTime}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email. Please try again later.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
