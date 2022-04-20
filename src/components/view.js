import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import Send from './send';
import deleteMessage from '../assets/utils/deleteMessage';
import socket from '../assets/utils/socket';

import '../assets/styles/view.css';

const View = () => {
  const [userId] = useOutletContext();
  const { messageId } = useParams();

  const API = `http://localhost:8080/message?chat=${messageId}`;

  const message = useGetData(API);

  socket.on('message', (message) => {
    console.log('message: ', message);
    return () => socket.off();
  });

  return (
    <>
      <div className='View'>
        <div className='View__title'>
          <img
            src='https://img.icons8.com/dotty/344/person-male.png'
            alt='user'
          />
          <h3>{`usuario`}</h3>
        </div>
        <div className='View__container'>
          {message.map((item) => (
            <div className='View__message' key={item._id}>
              <h4>{item.user.name}:</h4>
              <p className='View__message__info'>{item.message}</p>
              <p className='View__message__date'>
                {new Date(item.date).toLocaleTimeString()}
              </p>
              <button onClick={() => deleteMessage(item._id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
      <Send userId={userId} messageId={messageId} />
    </>
  );
};

export default View;
