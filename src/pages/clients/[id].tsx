import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { Box, TextField, Typography } from '@mui/material';



const ClientePage = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const { clientes, setCurrentClientId,currentClientId } = useData(); // Acesse os clientes do contexto

  useEffect(() => {
    console.log("useEffect chamado: id = ", id, ", currentClientId = ", currentClientId);
    if (typeof id === 'string' && id !== currentClientId) {
      setCurrentClientId(id);
    }
  }, [id, currentClientId, setCurrentClientId]);
  
  useEffect(() => {
    if (typeof id === 'string' && id !== currentClientId) {
      setCurrentClientId(id);
    }
  }, [id, setCurrentClientId, currentClientId]);
  
  useEffect(() => {
    console.log("ClientePage montado");
  }, []);
  

  // Encontre o cliente atual usando o id
  const cliente = clientes.find(cliente => cliente.id === id);

  return (
    <Box p={4}>
      {cliente ? (
        <>
          <Typography variant="h5">{cliente.nome}</Typography>
          <Typography variant="body1">{cliente.detalhes}</Typography>
        </>
      ) : (
        <TextField fullWidth disabled value="Cliente não encontrado." />
      )}
    </Box>
  );
};

export default ClientePage;

export async function getStaticPaths() {
  // Suponha que você obtenha esses IDs de um arquivo ou de uma API
  const clients = [{ id: '1' }, { id: '2' }, { id: '3' }]; // Exemplo de dados

  const paths = clients.map(client => ({
    params: { id: client.id },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Busque dados do cliente baseado em params.id, aqui usamos dados mockados
  const clientData = {
    id: params.id,
    name: `Cliente ${params.id}`,
    details: `Detalhes do Cliente ${params.id}`,
  };

  return { props: { client: clientData } };
}

