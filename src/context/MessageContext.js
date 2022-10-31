import { createContext, useState } from 'react';

const MessageContext = createContext();
const DB_URL = process.env.DB_SERVER_URL;

export const MessageProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    const newMessage = async (msg) => {
        const response = await fetch(`${DB_URL}/message`, {method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(msg)});

        const data = await response.json();
        setMessage([data, ...message]);
        setIsLoading(false);
    }

    const getMessage = async () => {
        const response = await fetch(`${DB_URL}/message`, {method: 'GET'});
        const data = await response.json();
        console.log(data);
        setMessage(data);
        setIsLoading(false);
    }

    const deleteMessage = async (id) => {
        await fetch(`${DB_URL}/message/${id}`, {method: 'DELETE'});
        setMessage(message.filter((item) => item.id === id));
    }

    return <MessageContext.Provider value={{
        message,
        isLoading,
        newMessage,
        getMessage,
        deleteMessage
    }}>
        {children}
    </MessageContext.Provider>
}

export default MessageContext;