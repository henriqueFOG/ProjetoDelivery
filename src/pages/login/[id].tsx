import { useState } from 'react';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { Container, Box, Button, TextField, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { clientes, setCurrentClientId } = useData();
  const router = useRouter();
  const { id } = router.query;

  const handleLogin = async () => {
    // Simulação de autenticação
    const cliente = clientes.find(cliente => cliente.id === id);

    if (cliente) {
      // Atualiza o ID do cliente atual no contexto
      setCurrentClientId(cliente.id);

      // Redireciona para a página do cliente específico
      router.push(`/clients/${cliente.id}`);
    } else {
      alert('Cliente não encontrado');
    }
  };

  return (
    <Box>
      <Container component="main" maxWidth="xs" sx={{ bgcolor: 'white' }}>
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h2">
            <Image src="/Logo_Rapidex.jpg" alt="Logo" width={400} height={100} />
          </Typography>
        </Box>
        <Paper elevation={6} sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Login
          </Typography>
          <TextField
            label="Usuário"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Senha"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button" // Altere de "submit" para "button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
