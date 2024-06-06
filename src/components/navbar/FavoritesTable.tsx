import React from 'react';

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import Employee from '../../models/Employee';
import { toggleFavorites } from '../../redux/slices/employeesSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface FavoritesTableProps {
  // define your props here
}

const FavoritesTable: React.FC<FavoritesTableProps> = () => {
  const { favorites } = useSelector((state: RootState) => state.employees);
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
        <IconButton
          aria-label="delete"
          color="secondary"
          onClick={() => onChangeCheckbox(params.row)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    { field: 'lastName', headerName: 'Apellido', width: 130 },
    { field: 'firstName', headerName: 'Nombre', width: 130 },
    { field: 'position', headerName: 'Puesto', width: 130 },
    { field: 'department', headerName: 'Departamento', width: 200 },
    { field: 'dateOfBirth', headerName: 'Fecha de Nacimiento', width: 180 },
    { field: 'contact', headerName: 'Contacto', width: 220 },
  ];

  return (
    <DataGrid
      rows={favorites}
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

export default FavoritesTable;
