import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    // cada vez que cambia el estado de favoritos se actualiza el localStorage
    if (action.type === 'employees/toggleFavorites') {
      const { employees } = state.getState() as RootState;

      localStorage.setItem('favorites', JSON.stringify(employees.favorites));

      return;
    }
  };
};
