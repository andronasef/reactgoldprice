'use client';
import { AttachMoney, Sell, SvgIconComponent } from '@mui/icons-material';
import { Box, Paper, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Tools() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '2rem',
        }}
      >
        الادوات
      </Typography>
      <Box
        sx={{
          display: 'grid',
          // 2 columns
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
        }}
      >
        <Tool
          name="حاسبة الارباح"
          icon={AttachMoney}
          // link="/tools/profit-calculator"
        />
        <Tool
          name="حاسبة السعر"
          icon={Sell}
          // link="/tools/price-calculator"
        />
      </Box>
    </Box>
  );
}

function Tool({
  name,
  icon,
  link = '/',
}: {
  name: string;
  icon: SvgIconComponent;
  link: string;
}) {
  return (
    <Link to={link}>
      <Paper
        sx={{
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SvgIcon component={icon} sx={{ fontSize: '3rem' }} />
        <Typography variant="button">{name}</Typography>
      </Paper>
    </Link>
  );
}

export default Tools;
