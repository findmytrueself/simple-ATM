import React from 'react';
import InputCard from './components/Input';
import { Routes, Route } from 'react-router-dom';
import AccountList from './components/Account/AccountList';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InputCard />} />
        <Route path="/account/*" element={<AccountList />} />
      </Routes>
    </>
  );
}

export default App;
