import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/view.css';
import Send from './send';

const View = (props) => {
  const [message, setMessage] = useState([
    {
      _id: '9',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8f5b57b9eb88c5d6934f3',
        name: 'Sara',
        __v: 0,
      },
      message: 'Hola como estas',
      date: '2022-01-08T17:22:13.398Z',
      __v: 0,
    },
    {
      _id: '7',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8ddffa2581e7f948218be',
        name: 'carlos',
        __v: 0,
      },
      message:
        'Hola, como estasfasfad  fa da s fsa df as df asd f as df sa df as fas d a sd fa sdf as ',
      date: '2022-01-08T17:34:15.819Z',
      __v: 0,
    },
    {
      _id: '6',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8ddffa2581e7f948218be',
        name: 'carlos',
        __v: 0,
      },
      message:
        'Hola, como estasfasfad  fa da s fsa df as df asd f as df sa df as fas d a sd fa sdf as ',
      date: '2022-01-08T17:34:15.819Z',
      __v: 0,
    },
    {
      _id: '5',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8ddffa2581e7f948218be',
        name: 'carlos',
        __v: 0,
      },
      message:
        'Hola, como estasfasfad  fa da s fsa df as df asd f as df sa df as fas d a sd fa sdf as ',
      date: '2022-01-08T17:34:15.819Z',
      __v: 0,
    },
    {
      _id: '4',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8ddffa2581e7f948218be',
        name: 'carlos',
        __v: 0,
      },
      message:
        'Hola, como estasfasfad  fa da s fsa df as df asd f as df sa df as fas d a sd fa sdf as ',
      date: '2022-01-08T17:34:15.819Z',
      __v: 0,
    },
    {
      _id: '2',
      chat: '61d8f65f7b9eb88c5d6934ff',
      user: {
        _id: '61d8ddffa2581e7f948218be',
        name: 'carlos',
        __v: 0,
      },
      message:
        'Hola, como estasfasfad  fa da s fsa df as df asd f as df sa df as fas d a sd fa sdf as ',
      date: '2022-01-08T17:34:15.819Z',
      __v: 0,
    },
  ]);
  const { idMessage } = useParams();
  const API = `http://localhost:3001/message?chat=${idMessage}`;
  useEffect(() => {
    async function callMessage() {
      let response = await fetch(API);
      response = await response.json();
      setMessage(response.body);
    }
    callMessage();
  }, [API]);

  return (
    <>
      <div className='View'>
        <div className='View__title'>
          <img
            src='https://img.icons8.com/dotty/344/person-male.png'
            alt='user'
          />
          <h3>{}</h3>
        </div>
        <div className='View__container'>
          {message.map((item) => (
            <div className='View__message' key={item._id}>
              <h4>{item.user.name}:</h4>
              <p className='View__message__info'>{item.message}</p>
              <p className='View__message__date'>
                {new Date(item.date).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Send />
    </>
  );
};

export default View;
