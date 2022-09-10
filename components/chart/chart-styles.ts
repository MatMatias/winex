import styled from "styled-components";

export const ChartScreenContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.18);
  overflow: hidden;
  z-index: 99;
`;

export const ChartContainer = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;

export const FillerDiv = styled.div`
  width: 85%;
  height: 100%;
`;

export const ChartContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;
