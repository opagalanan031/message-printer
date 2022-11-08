import { createContext, useState } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    // const newMessage = async (msg) => {
    //     const response = await fetch(`/message`, {method: 'POST', headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(msg)});

    //     const data = await response.json();
    //     setMessage([data, ...message]);
    //     setIsLoading(false);
    // }

    // const getMessage = async () => {
    //     const response = await fetch(`/message`, {method: 'GET'});
    //     const data = await response.json();

    //     setMessage(data);
    //     setIsLoading(false);
    // }

    // const deleteMessage = async (id) => {
    //     await fetch(`/message/${id}`, {method: 'DELETE'});
    //     setMessage(message.filter((item) => item.id === id));
    // }


    const newMessage = (msg) => {
        setMessage(msg);
        setIsLoading(false);
    }

    const deleteMessage = () => {
        setMessage('');
    }

    return <MessageContext.Provider value={{
        message,
        isLoading,
        newMessage,
        deleteMessage
    }}>
        {children}
    </MessageContext.Provider>
}

export default MessageContext;