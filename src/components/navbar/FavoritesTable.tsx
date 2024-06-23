import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import Employee from '../../models/Employee';
import { toggleFavorites } from '../../redux/slices/employeesSlice';
import { GRID_DEFAULT_LOCALE_TEXT_ES } from '../../utilities/GRID_DEFAULT_LOCALE_TEXT_ES';

const FavoritesTable = () => {
  const { favorites } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();

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
      localeText={GRID_DEFAULT_LOCALE_TEXT_ES}
    />
  );
};

export default FavoritesTable;
