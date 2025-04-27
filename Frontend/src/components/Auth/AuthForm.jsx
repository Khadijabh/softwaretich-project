import { TextField, Typography, Box } from '@mui/material';
import CustomButton from '../UI/CustomButton';

const AuthForm = ({ title, onSubmit, children, submitText }) => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        my: 4,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
        {title}
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {children}
        <CustomButton type="submit" variant="contained" fullWidth>
          {submitText}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AuthForm;