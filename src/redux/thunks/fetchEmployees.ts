import { createAsyncThunk } from '@reduxjs/toolkit';
import Employee from '../../models/Employee';

export const fetchEmployees = createAsyncThunk<
  Employee[], // Tipo del valor de retorno en caso de éxito
  void, // Tipo del argumento que el thunk puede aceptar (void en este caso porque no hay argumentos)
  { rejectValue: string } // Tipo del valor de retorno en caso de reject
>(
  'employees/fetchEmployees', // Nombre del thunk
  async (_, thunkAPI) => {
    const url = '/data/employees.json'; // Ruta a tu archivo JSON

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data: Employee[] = await response.json();
        return data; // Esto será el payload de la acción fulfilled
      } else {
        return thunkAPI.rejectWithValue(
          'Error al cargar los datos de los empleados. Intente nuevamente.'
        );
      }
    } catch (error) {
      console.error('Error fetching data: ' + error);

      return thunkAPI.rejectWithValue(
        'Error al cargar los datos de los empleados. Intente nuevamente.'
      );
    }
  }
);
