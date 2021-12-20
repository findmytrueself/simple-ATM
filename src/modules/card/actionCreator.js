// Action Object
export const ACCESS_CARD = 'ACCESS_CARD';
export const LOGOUT_CARD = 'LOGOUT_CARD';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const DEPOSIT_ACCOUNT = 'DEPOSIT_ACCOUNT';
export const WITHDRAW_ACCOUNT = 'WITHDRAW_ACCOUNT';
// Action Creator
export const accessCard = (payload) => ({ type: ACCESS_CARD, payload });
export const logoutCard = (payload) => ({ type: LOGOUT_CARD, payload });
export const selectAccount = (payload) => ({ type: SELECT_ACCOUNT, payload });
export const depositAccount = (payload) => ({ type: DEPOSIT_ACCOUNT, payload });
export const withdrawAccount = (payload) => ({
  type: WITHDRAW_ACCOUNT,
  payload,
});
