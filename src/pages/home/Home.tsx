import React from 'react';

import EmployeeTable from './components/EmployeeTable.tsx';
import { Grid, Typography } from '@mui/material';

interface HomeProps {
  // define your props here
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Typography variant="h5" component="h1" sx={{ paddingLeft: 0, paddingBottom: 3 }}>
        Lista de Empleados
      </Typography>
      <Grid container gap={4}>
        <EmployeeTable />
      </Grid>
    </>
  );
};

export default Home;
