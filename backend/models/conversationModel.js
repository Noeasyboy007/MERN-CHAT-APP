import mongoose from "mongoose";


const convarsationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    massages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Massage',
            default: [],
        }
    ]
}, { timestamps: true })

const Conversation = mongoose.model('Conversation', convarsationSchema);

export default Conversation;