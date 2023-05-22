'use client';

import { Box, Skeleton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

export default function PricesTable() {
  const [prices, setPrices] = useState([]);

  const currentDate = getCurrentDate();

  function getCurrentDate() {
    const now = new Date().toLocaleString('ar-EG', {
      timeZone: 'Africa/Cairo',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    return now;
  }

  async function fetchPrices() {
    const res = await fetch(
      'https://andronasef-nextgoldprice-api.hf.space/api/eg'
    );
    const data = await res.json();

    setPrices(data);
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        سعر الدهب اليوم
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        {currentDate}
      </Typography>
      {prices.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: '300px',
            maxWidth: {
              lg: '300px',
            },
          }}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>النوع</TableCell>
                <TableCell>سعر البيع</TableCell>
                <TableCell>سعر الشراء</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(prices).map(([_, { type, buy, sell }]) => (
                <TableRow
                  key={type}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {type}
                  </TableCell>
                  <TableCell>{buy}</TableCell>
                  <TableCell>{sell}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Skeleton
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
          variant="rounded"
          width={'100%'}
          height={300}
        />
      )}
      <Typography variant="button">السعر بالجنيه المصري </Typography>
    </Box>
  );
}
