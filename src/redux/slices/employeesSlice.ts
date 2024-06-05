import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import EmployeesState from '../../models/EmployeesState';
import Employee from '../../models/Employee';

const initialState: EmployeesState = {
  employees: [],
  favorites: [],
  isLoading: false,
  errorMessage: '',
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducers: {
    fetchEmployeesRequest: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    fetchEmployeesSuccess: (state, action: PayloadAction<Employee[]>) => {
      state.isLoading = false;
      state.errorMessage = '';
      state.employees = action.payload;
    },
    fetchEmployeesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { fetchEmployeesRequest, fetchEmployeesSuccess, fetchEmployeesFailure } =
  employeesSlice.actions;
