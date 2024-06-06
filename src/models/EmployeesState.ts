import Employee from './Employee';

interface EmployeesState {
  employeesList: Employee[];
  favorites: Employee[];
  isLoading: boolean;
  errorMessage: string;
}

export default EmployeesState;
