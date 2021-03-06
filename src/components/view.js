import React from 'react';
import '../assets/styles/view.css';

const View = () => {
  const message = [
    {
      _id: '61d9c8459e91871aec6cc1e4',
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
      _id: '61d9cb17ce7ac735e7f42d8c',
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
  ];
  return (
    <div className='View'>
      <div className='View__title'>
        <img
          src='https://img.icons8.com/dotty/344/person-male.png'
          alt='user'
        />
        <h3>User</h3>
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
  );
};

export default View;
