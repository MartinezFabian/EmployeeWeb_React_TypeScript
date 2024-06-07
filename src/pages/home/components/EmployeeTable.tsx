import React from 'react';

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { toggleFavorites } from '../../../redux/slices/employeesSlice';
import Employee from '../../../models/Employee';
import { GRID_DEFAULT_LOCALE_TEXT_ES } from '../../../utilities/GRID_DEFAULT_LOCALE_TEXT_ES';
import moment from 'moment';

interface EmployeeTableProps {
  // define your props here
}

const EmployeeTable: React.FC<EmployeeTableProps> = () => {
  const { employeesList, favorites } = useSelector((state: RootState) => state.employees);
  const dispatch: AppDispatch = useDispatch();

  const onChangeCheckbox = (employee: Employee) => {
    dispatch(toggleFavorites(employee));
  };

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="small"
          checked={!!favorites.find((favorite) => favorite.id === params.row.id)}
          onChange={() => onChangeCheckbox(params.row)}
        />
      ),
    },
    { field: 'lastName', headerName: 'Apellido', width: 130 },
    { field: 'firstName', headerName: 'Nombre', width: 130 },
    { field: 'position', headerName: 'Puesto', width: 200 },
    { field: 'department', headerName: 'Departamento', width: 200 },
    {
      field: 'dateOfBirth',
      headerName: 'Fecha de Nacimiento',
      width: 180,
      valueFormatter: (value) => {
        return moment.utc(value).format('DD/MM/YYYY');
      },
    },
    { field: 'contact', headerName: 'Contacto', width: 220 },
  ];

  return (
    <DataGrid
      rows={employeesList}
      columns={columns}
      disableColumnResize
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 8,
          },
        },
      }}
      pageSizeOptions={[8]}
      getRowId={(row) => row.id}
      localeText={GRID_DEFAULT_LOCALE_TEXT_ES}
    />
  );
};

export default EmployeeTable;
