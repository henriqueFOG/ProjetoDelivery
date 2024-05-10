// pages/_app.tsx
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import theme from '../styles/theme'; // Ajuste o caminho conforme necessário
import BottomNav from '@/components/BottomNav';
import { DataProvider } from '@/contexts/DataContext';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showBottomNav = !['/login', '/login/[id]'].includes(router.pathname); // Checa se a rota atual não é de login

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <CssBaseline /> {/* Normaliza o CSS e adiciona melhor suporte para Material-UI */}
        <Component {...pageProps} />
        {showBottomNav && <BottomNav />}
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
