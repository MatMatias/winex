import type { ProductItemType } from "@/types/index";
import { Fragment } from "react";
import Image from "next/image";
import { formatCurrency } from "@/utils/index";
import { ProductCard } from "../product-list-styles";

type ProductItemProps = {
  productItem: ProductItemType;
};

export const ProductItem = ({ productItem }: ProductItemProps) => {
  return (
    <Fragment>
      <ProductCard>
        <Image
          src={productItem.image}
          alt="Item image"
          width="200px"
          height="500px"
        />
        <h1
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            textAlign: "center",
          }}
        >
          {productItem.name}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.2rem",
            marginBottom: "1rem",
          }}
        >
          <del
            style={{
              color: "rgb(150, 150, 150)",
              fontSize: "14px",
              fontWeight: 800,
            }}
          >
            R$ {formatCurrency(productItem.priceNonMember)}
          </del>
          <span
            style={{
              borderRadius: "5px",
              color: "white",
              display: "inline-block",
              fontSize: "14px",
              padding: "3px",
              backgroundColor: "rgb(247, 149, 82)",
              fontWeight: "600",
            }}
          >
            {productItem.discount}% OFF
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
            marginBottom: "0.5rem",
          }}
        >
          <strong style={{ fontSize: "14px", fontWeight: "800" }}>
            SÓCIO WINE
          </strong>
          <span
            style={{
              color: "rgb(182, 17, 110)",
              fontWeight: "800",
              fontSize: "14px",
            }}
          >
            R${" "}
          </span>
          <span
            style={{
              fontSize: "25px",
              color: "rgb(182,17,110)",
              fontWeight: "800",
            }}
          >
            {formatCurrency(productItem.priceMember)}
          </span>
        </div>
        <div
          style={{
            color: "rgb(150, 150, 150)",
            fontWeight: "700",
          }}
        >
          NÃO SÓCIO R$ {formatCurrency(productItem.priceNonMember)}
        </div>
      </ProductCard>
    </Fragment>
  );
};
