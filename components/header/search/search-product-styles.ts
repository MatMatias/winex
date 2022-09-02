import styled from "styled-components";
import { SpriteIcons } from "../header-styles";

export const SearchIcon = styled(SpriteIcons)`
  background-position: 0 0;
  border-radius: 100%;
`;

export const SelectedSearchIcon = styled(SearchIcon)`
  background-position: 0 calc(1 * var(--icon-height));
`;

export const SearchInputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 73px;
  position: absolute;
  width: 100%;
  top: 88px;
  left: 0px;
  box-shadow: 0 2px 20px 0;
  background-color: rgb(245, 245, 245);
`;

export const SearchForm = styled.form`
  width: 80%;
  height: 44px;
`;

export const SearchInput = styled.input`
  border-style: none;
  font-size: 20px;
  padding-left: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const SearchInputMessage = styled.span`
  position: absolute;
  font-size: 12px;
  color: #666;
  bottom: 30px;
  right: 12.3%;
`;

export const SearchFormSubmissionButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 10%;
  bottom: 20px;
  border-style: none;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 100%;
`;
