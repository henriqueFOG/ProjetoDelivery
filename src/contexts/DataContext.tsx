import { createContext, useContext, useState, ReactNode } from 'react';
import { clientes } from '@/data/clientes';
import { promotions } from '@/data/promotions';
import { menu } from '@/data/menu';
import { cart } from '@/data/cart';

type ClienteType = {
  id: string;
  nome: string;
  detalhes: string;
};

type PromotionType = {
  id: string;
  Image: string;
  descricao: string;
};

type MenuType = {
  id: string;
  clienteId: string;
  nomeDoPrato: string;
  Image: string;
  descricao: string;
  preco: string;
  categoria: string;
};

type CartType = {
  id: string;
  Image: string;
  descricao: string;
};

type DataType = {
  clientes: ClienteType[];
  promotions: PromotionType[];
  menu: MenuType[];
  cart: CartType[];
  currentClientId: string;
  setCurrentClientId: (id: string) => void;
};

const defaultState: DataType = {
  clientes,
  promotions,
  menu,
  cart,
  currentClientId: '',
  setCurrentClientId: () => {},
};

const DataContext = createContext<DataType>(defaultState);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [currentClientId, setCurrentClientId] = useState<string>('');

  const value = {
    clientes,
    promotions,
    menu,
    cart,
    currentClientId,
    setCurrentClientId,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
