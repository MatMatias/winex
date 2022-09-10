import type { ProductItemType } from "@/types/index";
import { useChartListStore } from "@/store/index";
import Image from "next/image";
import {
  ChartProductListItem,
  ProductListItemInfo,
  ProductQuantity,
  ProductQuantityButton,
  PriceContainer,
} from "./product-list-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { formatCurrency } from "@/utils/format-currency";

interface ProductProps {
  productItem: { product: ProductItemType; quantity: number };
}

export const Product = ({ productItem }: ProductProps) => {
  const { increaseQuantity, decreaseQuantity, remove } = useChartListStore(
    (store) => store
  );

  return (
    <ChartProductListItem>
      <Image
        src={productItem.product.image}
        alt="Item image"
        objectFit="scale-down"
        width="100%"
        height="100%"
      />
      <ProductListItemInfo>
        <div>
          <p
            style={{
              color: "#333",
              fontSize: "14px",
              lineHeight: "1.2",
              fontWeight: "400",
              margin: "0px",
            }}
          >
            {productItem.product.name}
          </p>
          <p
            style={{
              color: "#999",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "16px",
              marginTop: "10px",
            }}
          >
            {productItem.product.country}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ProductQuantity>
            <ProductQuantityButton
              onClick={() => decreaseQuantity(productItem.product, 1)}
            >
              -
            </ProductQuantityButton>
            <span>{productItem.quantity}</span>
            <ProductQuantityButton
              onClick={() => increaseQuantity(productItem.product, 1)}
            >
              +
            </ProductQuantityButton>
          </ProductQuantity>
          <PriceContainer>
            <span style={{ fontSize: "14px" }}>R$ </span>
            <span style={{ fontSize: "20px" }}>
              {formatCurrency(
                productItem.product.priceMember * productItem.quantity
              )}
            </span>
          </PriceContainer>
        </div>
      </ProductListItemInfo>
      <FontAwesomeIcon
        onClick={() => remove(productItem.product)}
        icon={faCircleXmark}
        color="rgb(159, 159, 159)"
        fontSize="18px"
      />
    </ChartProductListItem>
  );
};
