import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function News() {
  const newsItems = useSelector((state) => state.news);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {newsItems.map((news) => (
          <Grid item key={news.id} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <img src={news.image} alt={news.title} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h6">{news.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {news.date}
              </Typography>
              <Typography variant="body2">{news.description}</Typography>
              <Button component={Link} to={`/news/${news.id}`} variant="contained" sx={{ mt: 2 }}>
                View More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
