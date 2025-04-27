import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ 
      bgcolor: 'white', 
      boxShadow: 'none',
      py: 2,
      borderBottom: '1px solid #e0e0e0'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: '#1a237e',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            textDecoration: 'none'
          }}
        >
          SOFTWERTICH
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;