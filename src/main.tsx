import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppTheme } from './theme/AppTheme';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <App></App>
      </AppTheme>
    </Provider>
  </React.StrictMode>
);
