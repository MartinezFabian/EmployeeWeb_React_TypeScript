import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, createTheme } from '@mui/material';

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme: FC<AppThemeProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
        contrastText: '#f1f1f1',
      },
      secondary: {
        main: '#5df500',
      },
      background: {
        default: '#eeeeee',
        paper: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
