import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Menyala Abangku
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" paragraph>
        Welcome to CRISIS!
      </Typography>
      <Typography variant="body1" paragraph>
       platform terpercaya untuk pendataan korban bencana alam. Kami berkomitmen menyediakan database real-time yang akurat dan komprehensif tentang individu terdampak bencana, bekerja sama dengan otoritas lokal, LSM, dan relawan. Dengan memanfaatkan teknologi canggih, kami memastikan data yang terkumpul membantu memperlancar distribusi bantuan, menyatukan kembali keluarga yang terpisah, dan mendukung upaya pemulihan komunitas. Di saat krisis, kami percaya bahwa informasi adalah kekuatan, dan tujuan kami adalah memberdayakan komunitas serta organisasi bantuan untuk bertindak cepat dan efektif.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
      Misi kami di Crisis adalah untuk meringankan penderitaan akibat bencana alam dengan menyediakan informasi yang tepat dan tepat waktu. Kami berupaya memastikan pengumpulan data yang akurat, memfasilitasi distribusi bantuan yang efektif, menyatukan kembali keluarga yang terpisah, mendukung upaya pemulihan jangka panjang, dan mendorong kolaborasi dengan otoritas lokal, LSM, serta relawan. Dengan data real-time yang kami sediakan, kami bertujuan untuk memberdayakan komunitas dan organisasi kemanusiaan agar dapat bertindak cepat dan efisien dalam menghadapi bencana.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>N</Avatar>
              <Typography variant="h6" component="h3">
                Natanael
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>F</Avatar>
              <Typography variant="h6" component="h3">
                Fadlil
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CTO
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 56, height: 56, mb: 2 }}>R</Avatar>
              <Typography variant="h6" component="h3">
                Random
              </Typography>
              <Typography variant="body2" color="text.secondary">
                COO
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
