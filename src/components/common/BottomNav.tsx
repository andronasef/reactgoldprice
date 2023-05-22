'use client';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import WalletIcon from '@mui/icons-material/Wallet';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const pages = {
  '/': 0,
  '/wallet': 1,
  '/settings': 2,
};

function BottomNav() {
  const location = useLocation();
  const [page, setValue] = useState(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);
  return (
    <Paper elevation={3}>
      <BottomNavigation
        value={page}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          value={'/'}
          label="الرئيسة"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="/wallet"
          label="المحفظة"
          icon={<WalletIcon />}
        />
        <BottomNavigationAction
          value="/settings"
          label="الاعدادات"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
export default BottomNav;
