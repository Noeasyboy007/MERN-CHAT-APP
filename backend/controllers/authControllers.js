import brcypt from "bcryptjs"
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// FOR NEW USER SIGNUP AUTH CONTROLLERS
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        //Checked Confirmed Password
        if (password !== confirmPassword) {
            res.status(400).json({ error: 'Passwords do not match' })
        }

        //Checked User is alrady exist  or not
        const user = await User.findOne({ username })
        if (user) {
            return res.status(200).json({ error: 'username alrady exist' })
        }

        //Hash password
        const salt = await brcypt.genSalt(10); // create salt
        const hashPassword = await brcypt.hash(password, salt)


        //For Boy profile picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        //For girl profile picture
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // create Nwe User 
        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        },);

        if (newUser) {
            //Generate JWT token
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save() // Save the user

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                createdAt: newUser.createdAt,
            })
        }
        else {
            res.status(400).json({ error: 'Invalid user Data' })
        }

    }
    catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: 'Internal Server error' })
    }
}


// FOR LOGIN CONTROLLERS
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });  //For find user
        const isPasswordCorrect = await brcypt.compare(password, user?.password || "");  //For compare password

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid username or password' }) //  Here check Password and userName is correct or note
        }

        generateTokenAndSetCookie(user._id, res);  // Generate token and set cookie for login

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic,
            createdAt: user.createdAt,
        })
    }
    catch (error) {
        console.log("Error in Login controller", error.message);
        res.status(500).json({ error: 'Internal Server error' })
    }
}


// FOR LOGOUT CONTROLLERS
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", { maxAge: 0 });  // Clear the cookie by using maxAge:0 mean expires 0
        res.status(500).json({ success: "Logged out successfully" })
    }
    catch (error) {
        console.log("Error in Logout controller", error.message);
        res.status(500).json({ error: 'Internal Server error' })
    }
}