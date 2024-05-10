import { createContext, useContext, useState, ReactNode } from 'react';
import { clientes } from '@/data/clientes'; // Certifique-se de que os dados estão sendo importados corretamente
import { promotions } from '@/data/promotions'; // Certifique-se de que os dados estão sendo importados corretamente
import { menu } from '@/data/menu'; // Certifique-se de que os dados estão sendo importados corretamente
import { cart } from '@/data/cart'; // Certifique-se de que os dados estão sendo importados corretamente

type DataType = {
    clientes: { id: string; nome: string; detalhes: string; }[];
    promotions: { id: string; Image: string; descricao: string; }[]; // Altere 'image' para 'Image'
    menu: { id: string; clienteId: string; nomeDoPrato:string;  Image: string; descricao: string; preco: string; categoria: string; }[]; // Altere 'image' para 'Image'
    cart: { id: string; Image: string; descricao: string; }[]; // Altere 'image' para 'Image'
    currentClientId: string; // ID do cliente atual
    setCurrentClientId: (id: string) => void; // Função para atualizar o cliente atual
};

const defaultState: DataType = {
    clientes,
    promotions,
    menu,
    cart,
    currentClientId: '', // ID inicial como vazio ou um valor padrão se disponível
    setCurrentClientId: () => {} // Implementação inicial vazia
};

const DataContext = createContext<DataType>(defaultState);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [currentClientId, setCurrentClientId] = useState<string>(''); // Comece com um ID padrão ou vazio
  const value = {
    clientes,
    promotions,
    menu,
    cart,
    currentClientId,
    setCurrentClientId
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
