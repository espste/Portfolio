import express from "express";
import nodemailer from 'nodemailer';

const Router = express.Router();

//CONTACT ROUTES
Router.get('/', response => {
    response.send('Contacted..')
});

Router.post('/', (req, res, next) => {
    let data = req.body;

    //smtp protocol for sending email
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: process.env.EMAIL_ADR,
            pass: process.env.EMAIL_PASS,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SEC,
            refreshToken: process.env.OATUH_REFRESH_TOKEN
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'espste1337@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `,
    };

    

    transporter.sendMail(mailOptions, (err, data) => {
       
        if(err) {
            console.log('Error ' + err);
        } else {
            console.log('Email sent successfully');
        }
    });
});

export default Router;