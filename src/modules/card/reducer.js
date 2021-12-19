import { dummyData } from '../../static/dummyData';
const initialState = dummyData;
console.log(initialState);
const reducer = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
