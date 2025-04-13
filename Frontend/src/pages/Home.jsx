import { Box, Typography, Button, Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgcolor="primary.main" color="white" py={10} textAlign="center">
        <Container>
          <Typography variant="h2" gutterBottom>
            Secure Your Digital World
          </Typography>
          <Typography variant="h5" gutterBottom>
            Enterprise-grade cybersecurity solutions
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Explore Solutions
          </Button>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          SOFTWERTICH in Numbers
        </Typography>
        <Grid container spacing={4}>
          {[
            { value: "+200", label: "Clients" },
            { value: "+1000", label: "Projects" },
            { value: "+100", label: "Certifications" },
            { value: "+25", label: "Countries" },
          ].map((item) => (
            <Grid item xs={6} md={3} key={item.label}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary">
                  {item.value}
                </Typography>
                <Typography>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}