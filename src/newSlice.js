import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Banjir',
    date: 'July 1, 2024',
    description: 'Banjir bandang di wilayah DKI Jakarta.',
    image: '/images/image1.jpg',
    content: 'Banjir bandang melanda sejumlah wilayah di DKI Jakarta pada hari Minggu (7/7) setelah hujan deras yang mengguyur ibu kota sejak dini hari. Ribuan rumah terendam air setinggi hingga 1,5 meter, menyebabkan ribuan warga harus dievakuasi ke tempat yang lebih aman.',
  },
  {
    id: 2,
    title: 'Kebakaran Hutan',
    date: 'June 25, 2024',
    description: 'Kebakaran Hutan di daerah Kalimantan Selatan.',
    image: '/images/image2.jpg',
    content: 'Kebakaran hutan kembali melanda Kalimantan Selatan, menghanguskan ribuan hektar lahan sejak akhir pekan lalu. Cuaca panas dan angin kencang telah mempercepat penyebaran api, membuat petugas pemadam kebakaran dan relawan kewalahan dalam usaha mereka memadamkan api.',
  },
  {
    id: 3,
    title: 'Tanah Longsor',
    date: 'June 18, 2024',
    description: 'Tanah Longsor di daerah Sulawesi Selatan.',
    image: '/images/image3.jpg',
    content: 'Tanah longsor melanda beberapa wilayah di Sulawesi Selatan pada hari Minggu (7/7) setelah hujan deras yang berlangsung selama beberapa hari. Puluhan rumah tertimbun tanah, menyebabkan banyak warga terjebak dan memerlukan evakuasi segera.',
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // Add your reducers here if needed
  },
});

export default newsSlice.reducer;

