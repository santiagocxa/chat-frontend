import React, { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

const Chats = () => {
  const [chatsList, setChatsList] = useState([]);
  const { chats } = useParams();
  const API = `http://localhost:3001/chat/${chats}`;
  useEffect(() => {
    async function callChats() {
      let response = await fetch(API);
      response = await response.json();
      setChatsList(response.body);
    }
    callChats();
  }, []);
  return (
    <>
      <ul>
        {chatsList.map((item) => (
          <li key={item._id}>
            <Link to={`messages/${item._id}`}>
              {item.users.map(
                (user) => user._id !== chats && user.name
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Chats;
