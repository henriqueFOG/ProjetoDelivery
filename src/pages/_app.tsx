import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // Ajuste o caminho conforme necessário
import BottomNav from '@/components/BottomNav';


function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza o CSS e adiciona melhor suporte para Material-UI */}
      <Component {...pageProps} />
      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
