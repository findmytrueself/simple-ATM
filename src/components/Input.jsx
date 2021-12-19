import React, { useState } from 'react';
import { dummyData } from '../static/dummyData';
import { useSelector } from 'react-redux';
import useAccessCard from '../hooks/useAccessCard';
import { useNavigate } from 'react-router-dom';
const Input = () => {
  const selector = useSelector((state) => state.card[0]);
  const navigate = useNavigate();
  const accessCard = useAccessCard();
  console.log(selector);
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
      const cardPIN = Object.values(el.cardPIN);
      return cardNum.forEach((ele, i) => {
        if (ele === submitCardNum && cardPIN[i] === password) {
          accessCard({ submitCardNum, password });
          navigate('/account');
        }
      });
    });
  };
  return (
    <>
      {!isPIN ? (
        <div>
          <h1>Insert card & Click button</h1>
          <span>
            <input type="text" onChange={(e) => cardFrontInput(e)} />
            <span>-</span>
            <input type="text" onChange={(e) => cardBackInput(e)} />
          </span>
          <button onClick={cardSubmit}>입력</button>
        </div>
      ) : (
        <div>
          <h1>Input PIN number & Click button</h1>
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
