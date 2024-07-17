import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from '../components/Chart';
import Deposits from '../components/Korban';
import Data from '../components/Data';

import 'bootstrap/dist/css/bootstrap.min.css';

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

export default function Dashboard() {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
          <Paper
              sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              }}
          >
              <Chart />
          </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
          <Paper
              sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              }}
          >
              <Deposits />
          </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Data />
          </Paper>
          </Grid>
      </Grid>
    <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}