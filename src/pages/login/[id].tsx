// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { Container, Box, Button, TextField, Typography, Paper } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { clientes, setCurrentClientId,currentClientId } = useData();
  const router = useRouter();
  const { id } = router.query;
  const handleLogin = async () => {
    // Aqui você adicionaria a lógica de autenticação
    // Exemplo: const { clienteId } = await fetchAPI(username, password);
    const cliente = clientes.find(cliente => cliente.id === id);// Mock de clienteId após login bem-sucedido

    // Redirecionar para a página do cliente específico
    router.push(`/clients/${id}`);
  };

  return (
    <Container component="main" maxWidth="xs">
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
          type="submit"
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
  );
};

export default LoginPage;
