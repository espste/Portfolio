import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
// import Auth from '../middleware/auth.js';

const userCtrl = {
    //register
    registerUser: async(req, res) => {
        const { username, password, email } = req.body;

        try {
            const user = await UserModel.findOne({email: email});
                if (user) {
                    return res.status(400).json({msg: 'Email Already Exists..'})
                };
        
            //hash password and update model
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new UserModel({
                username: username,
                password: passwordHash,
                email: email
            });
        
            const savedUser = await newUser.save();
            savedUser;
            res.json({msg: 'Register Success!'})
            } catch(err) {
                return res.status(500).json({msg: err.message});
            }
    },

    //login
    loginUser: async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({email: email});
            if (!user) {
                return res.status(400).json({msg: 'User does not Exist!'});
            };

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({msg: 'Incorrect password..'})
            };

            //if successful login
            const payload = {
                id: user._id,
                name: user.username
            };

            const tokenSecret = process.env.TOKEN_SEC;
            const token = jwt.sign(payload, tokenSecret, {
                expiresIn: '1d'
            });
            res.json({token});


        } catch(err) {
            return res.status(500).json({msg: err.message});
        }
    },

    //verify
    verifiedToken: (req, res)=>{
        
        try {
    
            const token = req.header("Authorization")
            if(!token) return res.send(false)
    
    
            jwt.verify(token, process.env.TOKEN_SEC, async (err, verified)=>{
                if(err) return res.send(false)
    
    
                const user = await UserModel.findById(verified.id)
                if(!user) return res.send(false)
        
                return res.send(true)
    
            })
        } catch (err) {
            return res.status(500).json({msg:err.message})  
        }
     }
};

export default userCtrl;