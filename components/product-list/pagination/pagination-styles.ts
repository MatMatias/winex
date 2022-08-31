import styled from "styled-components";

export const PaginationList = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const PaginationButton = styled.li`
  align-items: center;
  border-color: #a82472;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  color: #a82472;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 800;
  height: 50px;
  justify-content: center;
  padding: 0.25rem;
  text-align: center;
  width: 50px;
`;

export const PaginationMiddleButton = styled(PaginationButton)`
  flex-grow: 2;
  width: 100px;
`;

export const PaginationSelectedButton = styled(PaginationButton)`
  background-color: rgb(190, 45, 127);
  border-color: rgb(190, 45, 127);
  color: white;
  cursor: default;
  disabled: true;
`;

export const PaginationText = styled.li`
  align-items: end;
  color: #a82472;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 800;
  padding-bottom: 0.6rem;
`;
