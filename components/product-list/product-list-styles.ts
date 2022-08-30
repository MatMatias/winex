import styled from "styled-components";

export const ProductListContainer = styled.main`
  margin-right: 5rem;
  margin-top: 3rem;
`;

export const ProductListHeaderCounter = styled.strong`
  font-size: 18px;
`;

export const ProductListHeaderText = styled.span`
  font-size: 15px;
  color: #666;
  font-weight: 200;
`;

export const ProductListDataContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProductCard = styled.li`
  width: 340px;
  height: 480px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 10px 15px 15px rgba(0, 0, 0, 10%);
  padding-bottom: 1.5rem;
`;

export const ProductContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddToChartButton = styled.button`
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
