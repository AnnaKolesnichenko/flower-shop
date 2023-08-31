import { Container } from "@mui/material";
import Header from "./Header/Header";
import MainHero from "./MainHero/MainHero";
import Catalog from "./Catalog/Catalog";
import FlowerItemList from "./FlowerItemList/FlowerItemList";

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <MainHero />
      <Catalog />
      <FlowerItemList />
    </Container>
  );
};
