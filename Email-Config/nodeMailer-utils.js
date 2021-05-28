//const emailConfigNodmailer = require("./nodeMailer-config")
const nodemailer = require("nodemailer")

exports.sendEmailByNodemailer = (receipent, message, attachment) =>
    new Promise((resolve, reject) => {


        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "anikettikone44@gmail.com",
                pass: "9011869840"
            }
        });

        const data = {
            from: 'anikettikone44@gmail.com',
            to: receipent,
            cc: message.cc,
            subject: message.subject,
            text: message.text,
            inline: attachment,
            html: message.html + "  " + message.text,
        };

        smtpTransport.sendMail(data, function (error, response) {
            if (error) {
                reject(error);

            } else {
                resolve("Message sent: " + response.message);
            }
        });

    })
