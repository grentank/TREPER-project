import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Добавили для dispatch thunk-колбэков. Входящий аргумент должен типизироваться, но может быть опциональным
export type ThunkDispatch<T = void> = (arg: T) => (dispatch: AppDispatch) => void;
