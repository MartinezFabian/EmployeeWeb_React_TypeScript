import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import EmployeesState from '../../models/EmployeesState';
import Employee from '../../models/Employee';
import { fetchEmployees } from '../thunks/fetchEmployees';

const initialState: EmployeesState = {
  employeesList: [],
  favorites: localStorage.getItem('favorites')
    ? (JSON.parse(localStorage.getItem('favorites')!) as Employee[])
    : ([] as Employee[]),
  isLoading: false,
  errorMessage: '',
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<Employee>) => {
      if (state.favorites.find((employee) => employee.id === action.payload.id)) {
        // remove from favorites
        state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id);
      } else {
        // add to favorites
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.employeesList = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { toggleFavorites } = employeesSlice.actions;
