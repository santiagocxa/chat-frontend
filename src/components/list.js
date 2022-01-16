import React, { useState, useEffect } from 'react';
import '../assets/styles/list.css';

const List = () => {
  const [user, setUser] = useState([
    {
      _id: '1',
      name: 'Pedro',
    },
    {
      _id: '2',
      name: 'Carlos',
    },
    {
      _id: '3',
      name: 'Carlos',
    },
    {
      _id: '4',
      name: 'Carlos',
    },
  ]);

  useEffect(() => {
    async function callUser() {
      let response = await fetch('http://localhost:3001/user/');
      response = await response.json();
      console.log(response.body);
      setUser(response.body);
    }
    callUser();
  }, []);

  return (
    <div className='List'>
      {user.map((item) => (
        <div className='List__user' key={item._id}>
          <img
            src='https://img.icons8.com/dotty/344/person-male.png'
            alt='user'
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
