import React from 'react';
import { useSelector } from 'react-redux';
const AccountList = () => {
  const selector = useSelector((state) => state.card[0]);
  console.log(selector);
  return <div></div>;
};

export default AccountList;
