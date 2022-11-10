import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MessageContext from '../context/MessageContext';

function MessageInput() {
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const { newMessage } = useContext(MessageContext);

  const onChange = (e) => setMsg(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!msg) {
      toast.error('Please enter a message');
    } else {
      const newMsg = {
        msg
    }

      newMessage(newMsg);
      navigate('/show-message');
      setMsg('');
    }
  };

  return (
    <div className='container'>
      <div>
        <div className='mb-4 font-monospace fw-bolder text-center'>
          <h1>Enter your Message</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className='row w-75 mx-auto my-4'>
            <textarea
              className='form-control-lg border border-3 border-secondary shadow-sm'
              rows='10'
              cols='80'
              placeholder='Enter your message here...'
              onChange={onChange}
              required
            />
          </div>
          <div className='row w-50 mx-auto'>
            <button type='submit' className='btn btn-dark btn-lg fw-bold'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;