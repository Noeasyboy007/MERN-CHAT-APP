import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "./../skeletons/MessageSkeleton";
import Message from "./Message"

function Messages() {

    const { messages, loading } = useGetMessages();
    // console.log("MESSAGES :- ", messages);

    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto'>

            {/* <Message /> */}

            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message.id}
                        ref={lastMessageRef}
                    >
                        <Message message={message} />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}

        </div>
    )
}

export default Messages




// STRATER CODE SNIPPET
// import Message from "./Message"
// import MessageSkeleton from './../skeletons/MessageSkeleton';

// function Messages() {
//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )
// }

// export default Messages