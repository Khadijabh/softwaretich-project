import { Box, Typography, Grid, Container } from '@mui/material';

const Numbers = () => {
  const stats = [
    { value: '+200', label: 'Clients' },
    { value: '+1000', label: 'Projects' },
    { value: '+100', label: 'Certifications' },
    { value: '+25', label: 'Countries' }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          SOFTWERTICH in Numbers
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          SOFTWERTICH is a company specialized in cybersecurity. A true key player in the global market, 
          Softwaretich holds a strategic position in the cybersecurity ecosystem, thanks to a pool of 
          advanced skills and unique expertise.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Numbers;