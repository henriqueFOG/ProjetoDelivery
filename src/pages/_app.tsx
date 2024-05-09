import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // Ajuste o caminho conforme necessário
import BottomNav from '@/components/BottomNav';
import { DataProvider } from '@/contexts/DataContext';
import { clientes } from '@/data/clientes';


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Component {...pageProps} />
      <CssBaseline /> {/* Normaliza o CSS e adiciona melhor suporte para Material-UI */}
      <Component {...pageProps} />
      <BottomNav/>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
