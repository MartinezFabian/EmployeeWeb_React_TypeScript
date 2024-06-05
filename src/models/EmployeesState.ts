import Employee from './Employee';

interface EmployeesState {
  employees: Employee[];
  favorites: Employee[];
  isLoading: boolean;
  errorMessage: string;
}

export default EmployeesState;
