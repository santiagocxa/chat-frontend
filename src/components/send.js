import React, { useState } from 'react';
import sendMessage from '../assets/utils/sendMessage';
import '../assets/styles/send.css';

const Send = ({ userId, messageId }) => {
  const [userMessage, setUserMessage] = useState({
    chat: messageId,
    user: userId,
    message: '',
  });

  const onChange = (event) =>
    setUserMessage({
      ...userMessage,
      message: event.target.value,
    });

  return (
    <div
      className='Send'
      onSubmit={(event) =>
        sendMessage(event, userMessage, setUserMessage)
      }
    >
      <form className='Send__form'>
        <input
          className='Send__text'
          type='text'
          name='message'
          placeholder='Message...'
          onChange={onChange}
          value={userMessage.message}
        />
        <input className='Send__button' type='submit' value='Send' />
      </form>
    </div>
  );
};

export default Send;
