import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/user.css';

const User = () => {
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
  const API = 'http://localhost:3001/user/';
  useEffect(() => {
    async function callUser() {
      let response = await fetch(API);
      response = await response.json();
      setUser(response.body);
    }
    callUser();
  }, []);
  return (
    <>
      <div className='List'>
        {user.map((item) => (
          <Link to={`/chat/${item._id}`} key={item._id}>
            <div className='List__user'>
              <img
                src='https://img.icons8.com/dotty/344/person-male.png'
                alt='user'
              />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default User;
