import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6rem;
  padding-right: 6rem;
  border: 2px;
  border-color: rgb(200, 200, 200);
  border-style: none none solid none;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

export const NavList = styled.ul`
  overflow: hidden;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const NavItem = styled.li`
  display: inline-block;
  float: left;
  margin-right: 3rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SpriteIcons = styled.div`
  background: url(https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg);
  background-origin: content-box;
  cursor: pointer;
  display: inline-block;
  margin: 16px 20px;
  outline: 0;
  height: var(--icon-width);
  width: var(--icon-height);
`;

export const SearchIcon = styled(SpriteIcons)`
  background-position: 0 0;
`;

export const UserIcon = styled(SpriteIcons)`
  background-position: calc(-1 * var(--icon-width)) 0;
`;

export const WineBoxIcon = styled(SpriteIcons)`
  background-position: calc(-2 * var(--icon-width)) 0;
`;
