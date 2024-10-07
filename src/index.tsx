import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';
import { GlobalStyles } from './core/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>

  </ThemeProvider>
);

