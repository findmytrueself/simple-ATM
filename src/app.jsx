import React from 'react';
import Input from './components/Input';
import Account from './components/Account';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/account/*" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
