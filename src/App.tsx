import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store/store';
import { fetchEmployees } from './redux/thunks/fetchEmployees';

interface AppProps {
  // define your props here
}

const App: React.FC<AppProps> = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <Navbar />

      <Box
        component="main"
        sx={{
          overflow: 'hidden',
          flexGrow: 1,
          maxWidth: '1200px',
          margin: '60px auto 0 auto',
          padding: '20px',
        }}
      >
        <Home />
      </Box>
    </>
  );
};

export default App;
