// emailSenderSDK.js

const nodemailer = require('nodemailer');

class EmailSenderSDK {
  constructor(config) {
    this.transporter = nodemailer.createTransport(config);
  }

  async sendEmail(options) {
    try {
      const info = await this.transporter.sendMail(options);
      console.log('Email sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      throw error;
    }
  }
}

module.exports = EmailSenderSDK;
