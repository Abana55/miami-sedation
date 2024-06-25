import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, doctor, message, callbackDate, callbackTime } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    let mailOptions = {
      from: email,
      to: process.env.OFFICE_EMAIL, // Office email address
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
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
