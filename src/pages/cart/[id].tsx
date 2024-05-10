import react from 'react';
import Link from 'next/link';
import { useData } from '../../contexts/DataContext';

const Cart= () => {
  const data = useData();
  return (
    <div>
      <h1>Clientes</h1>
      {data && data.clientes.map(cliente => (
        <p key={cliente.id}>
          <Link href={`/cliente/${cliente.id}`}>
            <a>{cliente.nome}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};
export default Cart;