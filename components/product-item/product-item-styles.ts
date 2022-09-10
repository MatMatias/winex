import styled from "styled-components";

export const ProductItemContainer = styled.main`
  margin-top: 1rem;
  margin-left: 20rem;
  margin-right: 10rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8rem;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const BreadcrumbTextContainer = styled.div`
  display: inline;
  color: rgb(200, 26, 121);
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;

export const GrayBreadcrumbText = styled(BreadcrumbTextContainer)`
  color: rgb(100, 100, 100);
  font-weight: 500;
`;

export const HeaderContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const SubheaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 18px;
  font-weight: 500;
  color: rgb(100, 100, 100);
`;

export const PriceContainer = styled.article`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  gap: 0.2rem;
`;

export const CommentContainer = styled.article`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  display: flex;
  width: 380px;
  height: 60px;
  margin-top: 4rem;
  background-color: rgb(126, 188, 67);
  border-style: none;
  border-radius: 10px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  align-items: center;
`;

export const ChangeQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  color: rgb(255, 255, 255);
  font-size: 20px;
  height: 50%;
  align-items: center;
  border-right: solid 1px;
`;

export const AddProductContainer = styled.span`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
