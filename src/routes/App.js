import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Chats from '../components/chats';
import User from '../components/user';
import View from '../components/view';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='chat/:chats' element={<Chats />}>
          <Route path='messages/:idMessage' element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
