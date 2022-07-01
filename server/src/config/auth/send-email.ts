import sgMail from "@sendgrid/mail";
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

type MailOptions = {
  to: string;
  from: string;
  subject: string;
  html: string;
};

const sendEmail = (mailOptions: MailOptions) => {
  sgMail
    .send(mailOptions)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendEmail;
