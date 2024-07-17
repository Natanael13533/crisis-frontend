import React, { useEffect, useState } from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import api from '../api';

import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

export default function Data() {

  const [bencana, setBencana] = useState([]);

  useEffect(() => {
    // fetch api
    getBencana();
  }, []);

  useEffect(() => {
    // Initialize DataTables when the component mounts
    if (bencana.length > 0) {
      $('#example').DataTable();
    }
  }, [bencana]);

  const getBencana = () => {
    api.get("api/bencana/")
      .then((res) => {
        setBencana(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <React.Fragment>
      <Title>Data Korban</Title>
      <Table id="example" className="table table-striped" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Wilayah</TableCell>
            <TableCell>Total Bencana</TableCell>
            <TableCell>Korban Luka-Luka</TableCell>
            <TableCell align="right">Korban Jiwa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bencana.map((bencana) => (
            <TableRow key={bencana.id}>
              <TableCell align="center">{new Date(bencana.date).toLocaleDateString("en-GB")}</TableCell>
              <TableCell align="center">{bencana.wilayah}</TableCell>
              <TableCell align="center">{bencana.total_bencana}</TableCell>
              <TableCell align="center">{bencana.korban_luka}</TableCell>
              <TableCell align="center">{bencana.korban_jiwa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}