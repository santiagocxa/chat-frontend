import React from 'react';
import useGetData from '../hooks/useGetData';
import { Link } from 'react-router-dom';
import '../assets/styles/user.css';

const User = () => {
  const API = 'http://localhost:8080/user/';
  const user = useGetData(API);
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
