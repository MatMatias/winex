import styled from "styled-components";

export const MobilePaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  button {
    color: rgb(200, 26, 120);
    border-color: rgb(200, 26, 120);
    border-radius: 5px;
    border-style: solid;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    display: inline-block;
    cursor: pointer;
    width: 340px;
    height: 50px;
  }

  span {
    color: rgb(136, 136, 136);
  }

  strong {
    color: rgb(56, 56, 54);
  }
`;
