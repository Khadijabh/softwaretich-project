import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ 
      py: 8,
      backgroundColor: '#f5f7fa'
    }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          About us
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          We are a company specializing in cybersecurity, protecting critical infrastructures 
          and strategic sectors such as transportation, telecommunications, and governments. 
          With our in-depth expertise, we develop robust strategies to secure 5G networks 
          and provide advanced protection against emerging threats.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;