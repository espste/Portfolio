import jwt from 'jsonwebtoken';

const Auth = (req, res, next) => {

    try {

        const token = req.header('Authorization');
        if (!token) {
            return res.status(400).json({Message: 'Verification not possible..'});
        };
        
        // const verifyTok = process.env.TOKEN_SEC;
        jwt.verify(token, process.env.TOKEN_SEC, (err, user) => {
            if (err) {
                return res.status(400).json({Message: 'Authorization not valid'})
            };
            req.user = user;
            next;
        });


    } catch(err) {
        return res.status(400).json({Message: err.message});
    }
};

export default Auth;