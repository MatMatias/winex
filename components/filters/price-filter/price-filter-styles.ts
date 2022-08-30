import styled from "styled-components";

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceFilterOptionsItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  marin-bottom: 0.5rem;
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  text-size-adjust: 100%;
  cursor: pointer;
`;

export const PriceFilterOptionsItemCheckbox = styled.span`
  display: inline-block;
  height: 20px;
  margin-right: 0.5rem;
  padding: 2px;
  width: 20px;
  border-color: rgb(204, 204, 204);
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
`;

export const PriceFilterOptionsItemCheckboxSelected = styled(
  PriceFilterOptionsItemCheckbox
)`
  background: #a82472;
  background-clip: content-box;
  padding: 2px;
  border-color: #a82472;
`;
