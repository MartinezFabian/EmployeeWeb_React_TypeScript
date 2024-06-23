import { Middleware, configureStore } from '@reduxjs/toolkit';
import { employeesSlice } from '../slices/employeesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from '../middlewares/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
