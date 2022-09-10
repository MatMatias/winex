import { Fragment, useState } from "react";
import { useChartListStore, useProductStore } from "@/store/index";
import Image from "next/image";
import { RatingStars } from "./rating-stars";
import {
  ProductItemContainer,
  InfoContainer,
  PriceContainer,
  CommentContainer,
  AddButton,
  SubheaderContainer,
  BreadcrumbTextContainer,
  GrayBreadcrumbText,
  ChangeQuantityContainer,
  AddProductContainer,
} from "./product-item-styles";
import { Notification, notify } from "@/components/notification/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "@/utils/format-currency";

export const ProductItem = () => {
  const { product } = useProductStore((store) => store);
  const { increaseQuantity } = useChartListStore((store) => store);
  const [quantity, setQuantity] = useState<number>(1);

  if (product) {
    return (
      <Fragment>
        <Notification />
        <ProductItemContainer>
          <Image
            src={product.image}
            alt="Item image"
            width="339px"
            height="515px"
          />

          <InfoContainer>
            <BreadcrumbTextContainer>
              Vinhos <GrayBreadcrumbText>{">"} </GrayBreadcrumbText>
              {product.country}{" "}
              <GrayBreadcrumbText>
                {">"} {product.region}{" "}
              </GrayBreadcrumbText>
            </BreadcrumbTextContainer>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "24px",
                color: "rgb(0, 0, 0)",
              }}
            >
              {product.name}
            </h1>
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
              {product.avaliations > 0 ? (
                <Fragment>
                  <RatingStars howManyStars={product.rating} />
                  <span>({product.avaliations})</span>
                </Fragment>
              ) : (
                <span>Sem avaliações</span>
              )}
            </SubheaderContainer>

            <PriceContainer>
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "rgb(200, 26, 121)",
                }}
              >
                R$ {formatCurrency(product.priceMember)}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "rgb(150, 150, 150)",
                  fontWeight: "700",
                }}
              >
                NÃO SÓCIO R$ {formatCurrency(product.priceNonMember)}/UN.
              </span>
            </PriceContainer>

            <CommentContainer>
              <h2
                style={{
                  fontSize: "18px",
                  color: "rgb(0, 0, 0)",
                  fontWeight: "700",
                }}
              >
                Comentário do Sommelier
              </h2>
              <p
                style={{
                  marginTop: "16px",
                  color: "rgb(100, 100, 100)",
                  fontSize: "14px",
                }}
              >
                {product.sommelierComment}
              </p>
            </CommentContainer>

            <AddButton>
              <ChangeQuantityContainer>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  onClick={() =>
                    setQuantity((prevState: number) => prevState - 1)
                  }
                  style={{ cursor: "pointer" }}
                />
                {quantity}
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  onClick={() =>
                    setQuantity((prevState: number) => prevState + 1)
                  }
                  style={{ cursor: "pointer" }}
                />
              </ChangeQuantityContainer>
              <AddProductContainer
                onClick={() => {
                  increaseQuantity(product, quantity);
                  notify(product.name, product.price);
                }}
              >
                Adicionar
              </AddProductContainer>
            </AddButton>
          </InfoContainer>
        </ProductItemContainer>
      </Fragment>
    );
  }

  return <div>Não há produto selecionado</div>;
};
