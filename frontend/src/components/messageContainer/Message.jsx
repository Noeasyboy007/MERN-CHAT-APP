import { AuthContext } from './../../context/AuthContext';
import useConversation from './../../zustand/useConversation';

const Message = (message) => {
    const { authUser } = AuthContext();
    const { selectedConversation } = useConversation()

    const fromMe = message.senderId == authUser._id;

    const chatClassName = fromMe ? 'caht-end' : 'cahat-start';

    const profilePic = fromMe ? authUser.pro : selectedConversation?.profilePic;

    const bubbleBgColor = fromMe ? 'bg-purple-700' : "";


    return (
        <div className={`chat ${chatClassName}`}>

            <div className="chat-image avatar">
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component'
                        src={profilePic} />
                </div>
            </div>

            <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-90 text-xs flex gap-1 items-center'>03:41</div>

        </div>
    )
}

export default Message





// STRATER CODE SNIPPET

// const Message = () => {
//     return (
//         <div className="chat chat-end">

//             <div className="chat-image avatar">
//                 <div className='w-10 rounded-full'>
//                     <img alt='Tailwind CSS chat bubble component'
//                         src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"} />
//                 </div>
//             </div>

//             <div className={`chat-bubble text-white pb-2`}>Hi! What is Up</div>
//             <div className='chat-footer opacity-90 text-xs flex gap-1 items-center'>03:41</div>

//         </div>
//     )
// }

// export default Message
