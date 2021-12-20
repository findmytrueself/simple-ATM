import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import useDeposit from '../../hooks/useDeposit';
import useLogout from '../../hooks/useLogout';
const Account = ({ bankname, cardnum, balance }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [isDeposit, setIsDeposit] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const navigate = useNavigate();
  const depositDispatch = useDeposit();
  const logout = useLogout();
  const logoutHandler = () => {
    logout();
    navigate('/');
  };
  const depositHandler = () => {
    depositDispatch({ bankname, deposit });
  };
  const withdrawHandler = () => {
    console.log('withdraw', { bankname, withdraw });
  };
  return (
    <>
      <Container>
        <button onClick={logoutHandler}>Logout</button>
        <div>{bankname}</div>
        <div>{cardnum}</div>
        <div>{balance}$</div>
        {!isSelect ? (
          <button onClick={() => setIsSelect(!isSelect)}>select</button>
        ) : (
          <div>
            <button onClick={() => setIsSelect(!isSelect)}>cancel</button>
            <div>
              {!isDeposit ? (
                <button onClick={() => setIsDeposit(!isDeposit)}>
                  Deposit
                </button>
              ) : (
                <div>
                  <input
                    type="text"
                    onChange={(e) => setDeposit(e.target.value)}
                  />
                  <button onClick={depositHandler}>Deposit</button>
                </div>
              )}
            </div>
            <div>
              <div>
                {!isWithdraw ? (
                  <button onClick={() => setIsWithdraw(!isWithdraw)}>
                    Withdraw
                  </button>
                ) : (
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setWithdraw(e.target.value)}
                    />
                    <button onClick={withdrawHandler}>Withdraw</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Account;

const Container = styled.div`
  border: solid;
  border-width: thin;
  border-radius: 3px;
  margin-bottom: 1em;
  height: 25vh;
`;
