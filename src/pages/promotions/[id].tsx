import React from 'react';
import Link from 'next/link';
import { useData } from '@/contexts/DataContext';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Promotions = () => {
  const { clientes } = useData();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Clientes
      </Typography>
      <List>
        {clientes.map(cliente => (
          <ListItem key={cliente.id} component="div">
            <Link href={`/cliente/${cliente.id}`} passHref>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={cliente.nome} />
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Promotions;
