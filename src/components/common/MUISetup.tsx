'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Cairo Variable',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#E78E26',
    },
    background: {
      default: '#161412',
      paper: '#282421',
    },
  },
});

const cacheRtl = createCache({
  prepend: true,
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function MUISetup({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
export default MUISetup;
