import React from 'react';

import EmployeeTable from './components/EmployeeTable.tsx';
import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store.ts';

interface HomeProps {
  // define your props here
}

const Home: React.FC<HomeProps> = () => {
  const { isLoading, errorMessage } = useSelector((state: RootState) => state.employees);

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
