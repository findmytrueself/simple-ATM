import React, { useState } from 'react';
import { dummyData } from '../static/dummyData';
import useCard from '../hooks/useCard';
import { useDispatch } from 'react-redux';
const Input = () => {
  const dispatch = useDispatch();
  const [cardFront, setCardFront] = useState('');
  const [cardBack, setCardBack] = useState('');
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
        ele === submitCardNum
          ? dispatch({ type: 'insertCard', payload: submitCardNum })
          : null,
      );
    });
  };
  return (
    <>
      <h1>카드번호를 입력해주세요</h1>
      <span>
        <input type="text" onChange={(e) => cardFrontInput(e)} />
        <span>-</span>
        <input type="text" onChange={(e) => cardBackInput(e)} />
      </span>
      <button onClick={cardSubmit}>입력</button>
    </>
  );
};

export default Input;
