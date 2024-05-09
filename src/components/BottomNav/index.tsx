import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';

const BottomNav: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // certifique-se de que não seja coberto por outros elementos
      }}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Cardápio" value="/" icon={<MenuBookIcon />} />
      <BottomNavigationAction label="Promoções" value="/" icon={<CampaignIcon />} />
      <BottomNavigationAction label="Carrinho" value="/" icon={<ShoppingCartIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
