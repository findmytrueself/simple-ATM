import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { withdrawAccount } from '../modules/card';
export default function useWithdraw() {
  const dispatch = useDispatch();
  return useCallback(
    (payload) => dispatch(withdrawAccount(payload)),
    [dispatch],
  );
}
