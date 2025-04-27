import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '10px 24px',
  borderRadius: '4px',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default CustomButton;