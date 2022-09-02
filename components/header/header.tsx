import Image from "next/image";
import {
  HeaderContainer,
  NavList,
  NavItem,
  Div,
  IconsContainer,
  UserIcon,
  WineBoxIcon,
} from "./header-styles";
import { SearchProduct } from "./search/index";

export const Header = () => {
  return (
    <HeaderContainer>
      <Div>
        <Image
          src={"https://img.wine.com.br/logo/wine/black/wine.svg"}
          alt="Wine"
          width="108px"
          height="30px"
        />
        <NavList>
          <NavItem>
            <a href="#">Clube</a>
          </NavItem>
          <NavItem>
            <a href="#">Loja</a>
          </NavItem>
          <NavItem>
            <a href="#">Produtos</a>
          </NavItem>
          <NavItem>
            <a href="#">Ofertas</a>
          </NavItem>
          <NavItem>
            <a href="#">Eventos</a>
          </NavItem>
        </NavList>
      </Div>
      <IconsContainer>
        <SearchProduct />
        <UserIcon></UserIcon>
        <WineBoxIcon></WineBoxIcon>
      </IconsContainer>
    </HeaderContainer>
  );
};
