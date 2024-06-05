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
          p: {
            xs: 3, // for mobile
            md: 5, // for desktop
            lg: 10, // for large desktop
          },
        }}
      >
        <Home />
      </Box>
    </>
  );
};

export default App;
