import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function NewsDetail() {
  const { id } = useParams();
  const newsItems = useSelector((state) => state.news);
  const newsItem = newsItems.find((item) => item.id === parseInt(id, 10));

  if (!newsItem) {
    return <Typography variant="h5">News item not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <img src={newsItem.image} alt={newsItem.title} style={{ width: '100%', height: 'auto' }} />
        <Typography variant="h4">{newsItem.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {newsItem.date}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {newsItem.content}
        </Typography>
      </Paper>
    </Container>
  );
}
