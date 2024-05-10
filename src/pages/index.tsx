import Link from 'next/link';
import { useData } from '../contexts/DataContext';

const Home = () => {
  const data = useData();
  return (
    <div>
      <h1>Bem vindo ao Rapidex</h1>
    </div>
  );
};
export default Home;