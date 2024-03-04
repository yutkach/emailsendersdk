# emailsendersdk

A simple SDK for sending emails using Node.js and Nodemailer.

## Installation

To install the `emailsendersdk` package, run the following command:

```bash
npm install emailsendersdk
```

## Usage

```javascript
const EmailSenderSDK = require('emailsendersdk');

// Create an instance of EmailSenderSDK with your SMTP configuration
const emailSender = new EmailSenderSDK({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'user@example.com',
    pass: 'password'
  }
});

// Define email options
const emailOptions = {
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email from EmailSenderSDK package.'
};

// Send email
emailSender.sendEmail(emailOptions)
  .then(info => console.log('Email sent successfully:', info))
  .catch(error => console.error('Error occurred:', error));
```

## Configuration

The `EmailSenderSDK` constructor accepts a configuration object with the following options:

- `host`: SMTP server hostname.
- `port`: SMTP server port.
- `secure`: Indicates whether the connection should use SSL/TLS.
- `auth`: Object with SMTP authentication credentials (`user` and `pass`).

For more information on Nodemailer configuration options, refer to the [Nodemailer documentation](https://nodemailer.com/smtp/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
