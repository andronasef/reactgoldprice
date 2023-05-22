import { Box, Container } from '@mui/material';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
  const ref = useRef(null);
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container
        sx={{
          py: '25px',
          overflowY: 'auto',
          minHeight: 'calc(100vh - 56px)',
          maxHeight: 'calc(100vh - 56px)',
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '25px',
        }}
      >
        <Outlet />
      </Container>
      <BottomNav ref={ref} />
    </Box>
  );
};

export default Layout;
