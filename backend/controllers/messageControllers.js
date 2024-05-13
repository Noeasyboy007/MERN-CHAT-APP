import Message from '../models/messageModel.js';
import Conversation from './../models/conversationModel.js';

// SEND MESSAGE CONTROLLER
export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;   // we getting message from user input
        const { id: receiverId } = req.params;   // then we get user id(receiver id)
        const senderId = req.user._id      // we get sender id that is comming from req.user

        //Then we checked find conversation the between two user 
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        //Then we not found Conversation
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }

        // Create new Message(conversation)
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        // await newMessage.save();  // Save the message in Database



        // If conversation Sucessfully Created then Put the messages into Messages Array
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        // await conversation.save() // Save the conversation in Database



        // SOCKET IO FUNCTIONALITY 


        //This will parallel Save (Conversation + Messages)
        await Promise.all([conversation.save(), newMessage.save()])

        // Then we send Response Message
        res.status(201).json({ message: "Message sent successfully", newMessage })

    }
    catch (error) {
        console.log("Error in send Message controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// GET MESSAGE CONTROLLER
export const getMessages = async (req, res) => {
    try {
        const { id: userTochatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userTochatId] },
        }).populate('messages')   // not refrence but actual messages


        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
    }
    catch (error) {
        console.log("Error in Get Message controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
};