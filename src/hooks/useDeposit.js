import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { depositAccount } from '../modules/card';
export default function useDeposit() {
  const dispatch = useDispatch();
  return useCallback(
    (payload) => dispatch(depositAccount(payload)),
    [dispatch],
  );
}
