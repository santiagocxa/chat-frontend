import React from 'react';
import useGetData from '../hooks/useGetData';
import { Link, useParams, Outlet } from 'react-router-dom';
import '../assets/styles/chat.css';

const Chats = () => {
  const { userId } = useParams();
  const API = `http://localhost:8080/chat/${userId}`;
  const chatsList = useGetData(API);

  return (
    <>
      <section className='Chat-list'>
        <Link to='/'>back</Link>
        <ul>
          {chatsList.map((item) => (
            <Link key={item._id} to={`messages/${item._id}`}>
              <li>
                {item.users.map(
                  (user) => user._id !== userId && user.name
                )}
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <Outlet context={[userId]} />
    </>
  );
};

export default Chats;
