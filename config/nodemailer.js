import nodemailer from 'nodemailer';
import { EMAIL_GOOGLE, EMAIL_PASSWORD } from './env.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_GOOGLE,
    pass: EMAIL_PASSWORD,
  }
});

export default transporter;