import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';

const columns: GridColDef[] = [
  {
    field: 'actions',
    type: 'actions',
    sortable: false,
    width: 50,
    renderCell: () => <Checkbox size="small" />,
  },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'position', headerName: 'Puesto', width: 130 },
  { field: 'department', headerName: 'Departamento', width: 200 },
  { field: 'dateOfBirth', headerName: 'Fecha de Nacimiento', width: 160 },
  { field: 'contact', headerName: 'Contacto', width: 200 },
];

interface EmployeeTableProps {
  // define your props here
}

const EmployeeTable: React.FC<EmployeeTableProps> = () => {
  const { employeesList } = useSelector((state: RootState) => state.employees);
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
    />
  );
};

export default EmployeeTable;
