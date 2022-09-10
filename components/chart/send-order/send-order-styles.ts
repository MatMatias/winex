import styled from "styled-components";

export const SendOrderContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  z-index: 100;
  background-color: rgb(255, 255, 255);
  border-top: solid 1px;
  border-color: rgb(240, 240, 240);
`;

export const SendOrderPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SendOrderButton = styled.button`
  background-color: rgb(126, 188, 67);
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-weight: 700;
  width: 100%;
  align-self: center;
  border-style: none;
  border-radius: 5px;
  height: 48px;
`;
