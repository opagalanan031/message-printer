import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MessageContext from '../context/MessageContext'

function ShowMessage() {
    const { isLoading, message, deleteMessage} = useContext(MessageContext);

    const onClick = () => {
      deleteMessage();
    }

    if(isLoading) {
        return (
          <div className='d-flex justify-content-center m-5'>
            <div className='spinner-border p-5' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        );
    }

  return (
    <div className='container mt-5 mx-auto'>
      <div className='row p-5 text-center fw-bold fs-1 w-75 mx-auto border border-3 border-dark rounded-4 shadow message'>
        {/*Somewhat working, loads new message slowly, shows previous message before loading new message*/}
        {/* <p className='my-auto'>{message[message.length-1].msg}</p> */}

        <p className='my-auto'>{message.msg}</p>
      </div>
      <div className='row w-25 mt-4 mx-auto'>
        <Link to='/' className='btn btn-lg btn-dark fw-bold' onClick={onClick}>     
           Back
        </Link>
      </div>
    </div>
  );
}

export default ShowMessage;
