import mongoose from "mongoose";


const convarsationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Massage',
            default: [],
        }
    ]
}, { timestamps: true })

const Conversation = mongoose.model('Conversation', convarsationSchema);

export default Conversation;