import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataContext';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

const MenuPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { setCurrentClientId, menu: menuData } = useData();

  useEffect(() => {
    if (typeof id === 'string') {
      setCurrentClientId(id);
    }
  }, [id, setCurrentClientId]);

  const menus = menuData.filter(menu => menu.clienteId === id);

  return (
    <Box alignContent="center" p={4} sx={{ flexGrow: 1, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', mb: 3 }}>
        Cardápio
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={menu.id}>
              <Card raised sx={{ maxWidth: 345, m: 'auto', boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"  // Aumento da altura da imagem
                  image={menu.Image}
                  alt={menu.nomeDoPrato}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {menu.nomeDoPrato}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {menu.descricao}
                  </Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
                    Preço: {menu.preco}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ width: '100%', textAlign: 'center' }}>
            Nenhum item de menu encontrado para este cliente.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default MenuPage;
