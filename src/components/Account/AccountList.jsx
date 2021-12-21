import React from 'react';
import { useSelector } from 'react-redux';
import Account from './Account';
const AccountList = () => {
  const selector = useSelector((state) => state.card[0]);
  return (
    <>
      <h1>Hello, {selector.name}</h1>
      <h2>Select Account</h2>
      {selector.accounts?.map((account) => (
        <Account
          key={account.bankname}
          bankname={account.bankname}
          cardnum={account.cardnum}
          balance={account.balance}
        />
      ))}
    </>
  );
};

export default AccountList;
