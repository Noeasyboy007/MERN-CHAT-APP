import jwt from 'jsonwebtoken';
import User from './../models/userModel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Not Authorized - No Token Provide" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Not Authorized - Invalid Token" })
        }



        const user = await User.findById(decoded.userId).select('-passsword');

        if (!user) {
            return res.status(401).json({ error:"User not Found"})
        }

        req.user = user;

        next();
    }
    catch (error) {
        console.log("Error in protectRoute Middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export default protectRoute;