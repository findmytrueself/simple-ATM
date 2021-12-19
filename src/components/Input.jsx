import React, { useState } from 'react';
import { dummyData } from '../static/dummyData';
import { useDispatch } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  const [cardFront, setCardFront] = useState('');
  const [cardBack, setCardBack] = useState('');
  const [password, setPassword] = useState('');
  const [isPIN, setIsPIN] = useState(false);
  const cardFrontInput = (e) => {
    setCardFront(e.target.value);
  };
  const cardBackInput = (e) => {
    setCardBack(e.target.value);
  };
  const cardSubmit = () => {
    const submitCardNum = `${cardFront}-${cardBack}`;
    dummyData.map((el) => {
      const cardNum = Object.keys(el.cardPIN);
      return cardNum.map((ele) =>
        ele === submitCardNum ? setIsPIN(true) : null,
      );
    });
  };
  const cardPasswordSubmit = () => {
    const submitCardNum = `${cardFront}-${cardBack}`;
    dummyData.map((el) => {
      const cardNum = Object.keys(el.cardPIN);
      return cardNum.map((ele) =>
        ele === submitCardNum
          ? dispatch({
              type: 'accessCard',
              payload: { submitCardNum, password },
            })
          : null,
      );
    });
  };
  return (
    <>
      {!isPIN ? (
        <div>
          <h1>카드번호를 입력해주세요</h1>
          <span>
            <input type="text" onChange={(e) => cardFrontInput(e)} />
            <span>-</span>
            <input type="text" onChange={(e) => cardBackInput(e)} />
          </span>
          <button onClick={cardSubmit}>입력</button>
        </div>
      ) : (
        <div>
          <h1>비밀번호를 입력해주세요</h1>
          <span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <button onClick={cardPasswordSubmit}>입력</button>
        </div>
      )}
    </>
  );
};

export default Input;
