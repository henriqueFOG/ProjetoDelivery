import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Typography, TextField } from '@mui/material';

interface Client {
  id: string;
  name: string;
  details: string;
}

interface ClientePageProps {
  client: Client | null;
}

const ClientePage = ({ client }: ClientePageProps) => {
  const router = useRouter();

  if (!client) {
    return (
      <Box p={4}>
        <TextField fullWidth disabled value="Cliente não encontrado." />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h5">{client.name}</Typography>
      <Typography variant="body1">{client.details}</Typography>
    </Box>
  );
};

export default ClientePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const clients = [{ id: '1' }, { id: '2' }, { id: '3' }]; // Exemplo de dados

  const paths = clients.map(client => ({
    params: { id: client.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return { props: { client: null } };
  }

  const clientData = {
    id: params.id as string,
    name: `Cliente ${params.id}`,
    details: `Detalhes do Cliente ${params.id}`,
  };

  return { props: { client: clientData } };
};
