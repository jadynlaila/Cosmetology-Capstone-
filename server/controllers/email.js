const nodeMailer = require('nodemailer')

const sendPinEmail = async (req, res) => {
    const {client} = req.body;
    try {
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
              user: "westmeccoding@gmail.com",
              pass: "westmeccode",
            },
          });
          
          const options = {
            from: "westmeccoding@gmail.com",
            to: `${client.email}`,
            subject: `Hello WestMec Stylist`,
            text: client.pin ? `Hello ${client.name}! Your pin is ${client.pin}. Use this pin to sign in or to check clients in and out.` : `Something went wrong. Your pin returned undefined. Please contact jadyncalh@gmail.com to fix this error.`
          };
    
          transporter.sendMail(options, (err, info) => {
            console.log(err, info);
            if (err) return res.status(405).json({ err });
            return res.status(200).json({ information: info.response });
          });
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = {sendPinEmail}