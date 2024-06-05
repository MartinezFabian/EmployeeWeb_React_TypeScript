import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

interface AppProps {
  // define your props here
}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
