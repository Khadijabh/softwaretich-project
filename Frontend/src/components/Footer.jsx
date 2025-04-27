import { Box, Typography, Divider, Grid, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ 
      bgcolor: '#1a237e',
      color: 'white',
      py: 8,
      px: 4
    }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ 
              fontWeight: 'bold',
              fontSize: '1.2rem',
              mb: 2
            }}>
              SOFTWERTICH
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Rue Dakar, IMM N°5, APP N°1, Rabat
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Tibari@softwaretich.com
            </Typography>
            <Typography variant="body2">
              +212665-0707-75
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Typography sx={{ 
              fontWeight: 'bold',
              mb: 2,
              fontSize: '1.1rem'
            }}>
              Other
            </Typography>
            {['References', 'Partners', 'Media library', 'Career', 'Contact'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>{item}</Typography>
            ))}
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Typography sx={{ 
              fontWeight: 'bold',
              mb: 2,
              fontSize: '1.1rem'
            }}>
              Legal
            </Typography>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>{item}</Typography>
            ))}
          </Grid>
        </Grid>
        
        <Divider sx={{ 
          borderColor: 'rgba(255,255,255,0.3)',
          my: 4 
        }} />
        
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          © 2025 SOFTWERTICH. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;