import styled from "styled-components";

export const ChartProductListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  background-color: rgb(245, 245, 245);
`;

export const ProductListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  color: #b6116e;
  font-weight: 700;
`;

export const ProductQuantity = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-around;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  height: 35px;
  width: 60px;
`;

export const ProductQuantityButton = styled.span`
  color: #888;
  cursor: pointer;
  font-size: 20px;
`;
