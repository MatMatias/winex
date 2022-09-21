import { Fragment } from "react";
import { useChartListStore, useProductStore } from "@/store/index";
import Image from "next/image";
import Link from "next/link";
import {
  ProductItemContainer,
  CommentContainer,
  AddButton,
  SubheaderContainer,
  BreadcrumbTextContainer,
  GrayBreadcrumbText,
  Footer,
  PriceDiscount,
  GoBackArrow,
} from "./product-item-mobile-styles";
import { Notification, notify } from "@/components/notification/index";
import { formatCurrency } from "@/utils/format-currency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const ProductItemMobile = () => {
  const { product } = useProductStore((store) => store);
  const { increaseQuantity } = useChartListStore((store) => store);
  const quantity = 1;

  if (product) {
    return (
      <Fragment>
        <Notification />
        <div style={{ marginTop: "1rem" }}>
          <Link href="/">
            <GoBackArrow>
              <FontAwesomeIcon icon={faArrowLeft} />
            </GoBackArrow>
          </Link>
        </div>
        <ProductItemContainer>
          <BreadcrumbTextContainer>
            Vinhos <GrayBreadcrumbText>{">"} </GrayBreadcrumbText>
            {product.country}{" "}
            <GrayBreadcrumbText>
              {">"} {product.region}{" "}
            </GrayBreadcrumbText>
          </BreadcrumbTextContainer>
          <h1>{product.name}</h1>
          <SubheaderContainer>
            <Image
              src={product.flag}
              alt="Country flag"
              width="16px"
              height="16px"
            />
            <span>{product.country}</span>
            <span>{product.type}</span>
            <span>{product.classification}</span>
            {product.size ? (
              <span>{product.size}</span>
            ) : (
              <span>{product.volume}</span>
            )}
          </SubheaderContainer>
          <Image
            src={product.image}
            alt="Item image"
            objectFit="scale-down"
            width="339px"
            height="515px"
          />

          <CommentContainer>
            <h2>Descrição</h2>
            <p>{product.sommelierComment}</p>
          </CommentContainer>
        </ProductItemContainer>
        <Footer>
          <PriceDiscount>{product.discount}% OFF</PriceDiscount>
          <div>
            <p>
              R$ <s>{formatCurrency(product.priceNonMember)}</s>
            </p>
            <span>
              R$ <strong>{formatCurrency(product.priceMember)}</strong>
            </span>
          </div>
          <AddButton
            onClick={() => {
              increaseQuantity(product, quantity);
              notify(product.name, quantity * product.priceMember);
            }}
          >
            Adicionar
          </AddButton>
        </Footer>
      </Fragment>
    );
  }

  return <div>Não há produto selecionado</div>;
};
