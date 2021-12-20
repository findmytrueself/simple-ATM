import {
  ACCESS_CARD,
  LOGOUT_CARD,
  SELECT_ACCOUNT,
  DEPOSIT_ACCOUNT,
  WITHDRAW_ACCOUNT,
} from '.';
import { dummyData } from '../../static/dummyData';
const initialState = dummyData;
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCESS_CARD:
      return state.filter((el) =>
        el.cardPIN[action.payload.submitCardNum] === action.payload.password
          ? el
          : null,
      );
    case LOGOUT_CARD:
      return (state = initialState);
    case SELECT_ACCOUNT:
      return state;
    case DEPOSIT_ACCOUNT:
      console.log(action.payload, 'payload');
      console.log(state);
      const temp = state[0].accounts.map((el) => {
        if (el.bankname === action.payload.bankname) {
          const updateBalance = el.balance + +action.payload.deposit;
          return Object.assign({}, { ...el }, { balance: updateBalance });
        }
        return el;
      });
    //   return state.map((el) => {
    //     if (el.accounts.bankname === action.payload.bankname) {
    //       el.accounts.balance += +action.payload.deposit;
    //       //   return Object.assign({}, { ...el });
    //     }
    //     return el;
    //   });
    case WITHDRAW_ACCOUNT:
      return state;
    default:
      return state;
  }
};

export default reducer;
