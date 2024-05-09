import { useRouter } from 'next/router';
import { clientes } from '../../data/clientes';
import{Box,TextField} from '@mui/material';

const ClientePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const cliente = clientes.find(cliente => cliente.id === id);

  return (
    <Box p={4}>
      {cliente ? (
        <>
          <div>{cliente.nome}</div>
<div>{cliente.detalhes}</div>
        </>
      ) : (
        <TextField>Cliente não encontrado.</TextField>
      )}
    </Box>
  );
};

export default ClientePage;
