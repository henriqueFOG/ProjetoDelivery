// BottomNav.tsx
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';

const BottomNav = () => {
  const { currentClientId } = useData();
  const router = useRouter(); // Use useRouter for navigation

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <BottomNavigation showLabels sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => handleNavigate(`/clients/${currentClientId}`)}
      />
      <BottomNavigationAction
        label="Cardápio"
        icon={<MenuBookIcon />}
        onClick={() => handleNavigate(`/menu/${currentClientId}`)}
      />
      <BottomNavigationAction
        label="Promoções"
        icon={<CampaignIcon />}
        onClick={() => handleNavigate(`/promotions/${currentClientId}`)}
      />
      <BottomNavigationAction
        label="Carrinho"
        icon={<ShoppingCartIcon />}
        onClick={() => handleNavigate(`/cart/${currentClientId}`)}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
