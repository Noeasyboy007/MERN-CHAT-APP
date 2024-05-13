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


        //For Boy profile picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        //For girl profile picture
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // create Nwe User 
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            ProfilePic: gender == 'male' ? boyProfilePic : girlProfilePic
        })
        await newUser.save()

    }
    catch (error) {

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