import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { accessCard } from '../modules/card';
export default function useAccessCard() {
  const dispatch = useDispatch();
  return useCallback((payload) => dispatch(accessCard(payload)), [dispatch]);
}
