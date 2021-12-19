import { ACCESS_CARD } from '.';
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
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
