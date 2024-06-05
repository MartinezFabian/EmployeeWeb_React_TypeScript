import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

interface AppProps {
  // define your props here
}

const App: React.FC<AppProps> = () => {
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
