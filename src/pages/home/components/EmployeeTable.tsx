import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Checkbox } from '@mui/material';

const employeesTest = [
  {
    id: '1',
    lastName: 'García',
    firstName: 'Luis',
    position: 'Manager',
    department: 'Departamento de IT',
    dateOfBirth: '1985-03-12',
    contact: 'luis.garcia@mail.com',
  },
  {
    id: '2',
    lastName: 'Martínez',
    firstName: 'Ana',
    position: 'Developer',
    department: 'Departamento de Desarrollo',
    dateOfBirth: '1990-07-24',
    contact: 'ana.martinez@mail.com',
  },
  {
    id: '3',
    lastName: 'López',
    firstName: 'Carlos',
    position: 'Tester',
    department: 'Departamento de QA',
    dateOfBirth: '1988-11-02',
    contact: 'carlos.lopez@mail.com',
  },
  {
    id: '4',
    lastName: 'Fernández',
    firstName: 'María',
    position: 'HR Specialist',
    department: 'Recursos Humanos',
    dateOfBirth: '1992-05-18',
    contact: 'maria.fernandez@mail.com',
  },
];

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
  return (
    <DataGrid
      rows={employeesTest}
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
