import { Box } from '@mui/material';
import PricesTable from '../components/home/PriceTable';
import Tools from '../components/home/Tools';

export default function Home() {
  return (
    <Box
      sx={{
        overflow: ['auto', 'auto', 'hidden'],
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        gap: '1rem',
      }}
    >
      <PricesTable />
      <Tools />
    </Box>
  );
}
