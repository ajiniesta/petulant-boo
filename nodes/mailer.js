var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MUSR || 'boda.eva.antonio@gmail.com',
        pass: process.env.MPWD || ''
    }
});

var mailOptions = {
    from: 'boda.eva.antonio@gmail.com', // sender address
    to: 'antonioj.iniesta@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});