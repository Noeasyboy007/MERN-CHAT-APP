import brcypt from "bcryptjs"
import User from "../models/userModel.js";

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
            await newUser.save() // Save the user
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                createdAt: newUser.createdAt,
            })
        }
        else{
            res.status(400).json({ error: 'Invalid user Data' })
        }

    }
    catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: 'Internal Server error' })
    }
}



export const login = (req, res) => {
    res.send('Login Page')
    console.log('Login User');
}

export const logout = (req, res) => {
    res.send('Logout Page')
    console.log('Logout User');
}