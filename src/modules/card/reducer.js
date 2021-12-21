import {
  ACCESS_CARD,
  LOGOUT_CARD,
  SELECT_ACCOUNT,
  DEPOSIT_ACCOUNT,
  WITHDRAW_ACCOUNT,
} from '.';
import { dummyData } from '../../static/dummyData';
const db = dummyData;
// reducer
const reducer = (state = db, action) => {
  switch (action.type) {
    case ACCESS_CARD:
      return state.filter((card) =>
        card.cardPIN[action.payload.submitCardNum] === action.payload.password
          ? card
          : null,
      );
    case LOGOUT_CARD:
      return (state = db);
    case SELECT_ACCOUNT:
      return state;

    case DEPOSIT_ACCOUNT:
      const depositAccounts = state[0].accounts.map((card) => {
        if (card.bankname === action.payload.bankname) {
          const updateBalance = card.balance + +action.payload.deposit;
          return Object.assign({}, { ...card }, { balance: updateBalance });
        }
        return card;
      });
      const deposit = state.slice();
      deposit[0].accounts = depositAccounts;
      dummyData.forEach((el) => {
        if (el.name === deposit[0].name) {
          return dummyData.map((el) => Object.assign({}, { ...deposit[0] }));
        }
      });
      return state.map((el) => Object.assign({}, { ...deposit[0] }));
    case WITHDRAW_ACCOUNT:
      const withdrawAccounts = state[0].accounts.map((card) => {
        if (card.bankname === action.payload.bankname) {
          const updateBalance = card.balance - +action.payload.withdraw;
          return Object.assign({}, { ...card }, { balance: updateBalance });
        }
        return card;
      });
      const withdraw = state.slice();
      withdraw[0].accounts = withdrawAccounts;
      dummyData.forEach((el) => {
        if (el.name === withdraw[0].name) {
          return dummyData.map((el) => Object.assign({}, { ...withdraw[0] }));
        }
      });
      return state.map((el) => Object.assign({}, { ...withdraw[0] }));
    default:
      return state;
  }
};

export default reducer;
