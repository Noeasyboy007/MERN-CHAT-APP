import User from "../models/userModel.js";

export const getUserForsidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        // Here show all user in side bar but expect LoggedInUser
        const filteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password");
        
        res.status(200).json(filteredUsers);
    }
    catch (error) {
        console.error("Error in getUserForsidebar:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}