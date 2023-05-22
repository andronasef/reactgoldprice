import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function NoMatch() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '#/';
    }, 5000);
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      <Typography>صفحة خاطئة</Typography>
      <Typography>سيتم الرجوع للصفحة الرئيسة خلال 5 ثواني</Typography>
    </Box>
  );
}
