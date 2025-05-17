import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box>
      <Header />
      
      {/* Section About Us */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h1" sx={{ color: '#1a237e', mb: 3 }}>
          About us
        </Typography>
        <Box sx={{ 
          borderLeft: '4px solid #1a237e',
          pl: 3,
          py: 1,
          mb: 4
        }}>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            We are a company specializing in cybersecurity, protecting critical infrastructures and strategic sectors such as transportation, telecommunications, and governments. With our in-depth expertise, we develop robust strategies to secure 5G networks and provide advanced protection against emerging threats.
          </Typography>
        </Box>
      </Container>

      {/* Hero Section */}
      <Box sx={{
        backgroundImage: 'url(/images/cybersecurity-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 12,
        textAlign: 'center',
        color: 'white'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Secure Your Digital World
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            <strong>Enterprise-grade cybersecurity solutions to protect your business from evolving digital threats</strong>
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              bgcolor: '#ff6d00',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#e65100'
              }
            }}
          >
            Explore Solutions
          </Button>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ color: '#1a237e', textAlign: 'center', mb: 4 }}>
          SOFTWERTICH in Numbers
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
          SOFTWERTICH is a company specialized in cybersecurity. A true key player in the global market, SOFTWERTICH holds a strategic position in the cybersecurity ecosystem, thanks to a pool of advanced skills and unique expertise.
        </Typography>
        
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          {[
            { value: '+200', label: 'Clients' },
            { value: '+1000', label: 'Projects' },
            { value: '+100', label: 'Certifications of security' },
            { value: '+25', label: 'Pays' }
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Typography variant="h4" sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                {item.value}
              </Typography>
              <Typography variant="body1">{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default HomePage;