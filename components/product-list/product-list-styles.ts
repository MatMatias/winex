import styled from "styled-components";

export const ProductListContainer = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ProductListHeaderCounter = styled.strong`
  font-size: 18px;
`;

export const ProductListHeaderText = styled.span`
  font-size: 15px;
  color: #666;
  font-weight: 200;
`;

export const ProductListDataContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 2rem;
  row-gap: 3rem;

  @media (min-width: 751px) and (max-width: 1100px) {
    grid-template-columns: auto auto;
    row-gap: 2rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: auto;
    row-gap: 2rem;
  }
`;

export const ProductCard = styled.div`
  cursor: pointer;
  width: 340px;
  height: 480px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 10px 15px 15px rgba(0, 0, 0, 10%);
  padding-bottom: 1.5rem;
`;

export const ProductContainer = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddToChartButton = styled.button`
  cursor: pointer;
  display: inline-block;
  background-color: rgb(126, 188, 67);
  color: white;
  border-radius: 5px;
  width: 340px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
`;
