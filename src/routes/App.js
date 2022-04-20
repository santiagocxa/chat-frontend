import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Chats from '../components/chats';
import User from '../components/user';
import View from '../components/view';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='chat/:userId' element={<Chats />}>
            <Route path='messages/:messageId' element={<View />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
