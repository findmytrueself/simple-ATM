import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { logoutCard } from '../modules/card';
export default function useLogout() {
  const dispatch = useDispatch();
  return useCallback((payload) => dispatch(logoutCard(payload)), [dispatch]);
}
