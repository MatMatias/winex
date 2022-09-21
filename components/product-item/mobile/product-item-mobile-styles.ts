import styled from "styled-components";

export const GoBackArrow = styled.a`
  margin-top: 2rem;
  cursor: pointer;
  font-size: 30px;
  color: rgb(0, 0, 0);
  font-weight: 200;
  justify-self: flex-start;
  margin-left: 10%;
`;

export const ProductItemContainer = styled.main`
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  h1 {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(0, 0, 0);
    text-align: center;
  }
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

export const CommentContainer = styled.article`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    color: rgb(0, 0, 0);
    font-weight: 700;
  }

  p {
    margin-top: 16px;
    color: rgb(100, 100, 100);
    font-size: 14px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  width: 50%;
  height: 60px;
  background-color: rgb(126, 188, 67);
  border-style: none;
  border-radius: 10px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 -5px 5px rgb(220, 220, 220);
  padding: 0.5rem;
  margin-top: 1rem;
  position: relative;

  font-size: 14px;
  font-weight: 500;
  color: rgb(85, 85, 85);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    font-size: 12px;
    color: rgb(200, 26, 120);
    font-weight: 700;
  }

  strong {
    font-size: 20px;
    font-weight: 700;
    color: rgb(200, 26, 120);
  }
`;

export const PriceDiscount = styled.p`
  position: absolute;
  top: -20px;
  left: 0.5rem;
  background-color: rgb(242, 102, 73);
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
  font-weight: 600;
`;
