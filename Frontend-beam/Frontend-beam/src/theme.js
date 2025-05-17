import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Bleu foncé SOFTWERTICH
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6d00', // Orange pour les accents
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#1a237e',
    },
    h2: {
      fontWeight: 600,
      color: '#1a237e',
      marginBottom: '1.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '12px 24px',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;