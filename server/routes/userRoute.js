import express from "express";
import userCtrl from '../controllers/userCtrl.js';
import Auth from '../middleware/auth.js';
const Router = express.Router();

//register
Router.post('/register', userCtrl.registerUser);

//login
Router.post('/login', userCtrl.loginUser);

//verify
Router.get('/verify', userCtrl.verifiedToken);

export default Router;