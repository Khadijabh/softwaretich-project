import { Box, Typography, Button, Container } from '@mui/material';

const SecureWorld = () => {
  return (
    <Box sx={{
      py: 10,
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1a237e 0%, #303f9f 100%)',
      color: 'white'
    }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Secure Your Digital World
        </Typography>
        <Typography variant="h5" paragraph sx={{ mb: 4 }}>
          Enterprise-grade cybersecurity solutions to protect your business from evolving digital threats
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          sx={{
            px: 6,
            py: 2,
            fontSize: '1.1rem'
          }}
        >
          Explore Solutions
        </Button>
      </Container>
    </Box>
  );
};

export default SecureWorld;