import { Alert, CircularProgress, Grid, Typography } from '@mui/material';

import EmployeeTable from './components/EmployeeTable.tsx';
import { useAppSelector } from '../../redux/store/store.ts';

const Home = () => {
  const { isLoading, errorMessage } = useAppSelector((state) => state.employees);

  return (
    <>
      <Typography variant="h5" component="h1" sx={{ paddingLeft: 0, paddingBottom: 3 }}>
        Lista de Empleados
      </Typography>
      <Grid container gap={4}>
        {isLoading ? (
          <CircularProgress sx={{ margin: 'auto' }} color="primary" />
        ) : errorMessage.length > 0 ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : (
          <EmployeeTable />
        )}
      </Grid>
    </>
  );
};

export default Home;
