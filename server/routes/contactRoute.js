import express from "express";
import nodemailer from 'nodemailer';

const Router = express.Router();

//CONTACT ROUTES
Router.get('/contact', (req, res) => {
    res.send('Contacted..')
});

Router.post('/', (req, res) => {
    //smtp protocol for sending email(messages)
    let smptpTransport = nodemailer.createTransport({
        service: 'Gmail',
        //connection port
        port: 465,
        //for authentication
        auth: {
            user: process.env.EMAIL_ADR,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: data.email,
        to: process.env.EMAIL_ADR,
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

    smptpTransport.sendMail(mailOptions, (err, res) => {

        try {
            
            if(err) {
                return res.status(400).json({Message: err});
            } else {
                return res.status(200).json({Message: 'Message was sent!'});
            }
        } catch (err) {
            res.status(500).json({Message: err});
        }
        
    });

});




export default Router;