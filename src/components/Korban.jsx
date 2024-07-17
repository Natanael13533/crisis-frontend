import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

import api from '../api';

export default function Korban() {
  const [totalKorbanJiwa, setTotalKorbanJiwa] = useState(0);

  useEffect(() => {
    async function fetchTotalKorbanJiwa() {
      try {
        const response = await api.get("api/korban_jiwa/");
        setTotalKorbanJiwa(response.data.total);
      } catch (error) {
        console.error('Error fetching total korban jiwa:', error);
      }
    }

    fetchTotalKorbanJiwa();
  }, []);

  return (
    <React.Fragment>
      <Title>Jumlah Total Korban</Title>
      <Typography component="p" variant="h4">
        {totalKorbanJiwa}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        On All Date
      </Typography>
    </React.Fragment>
  );
}