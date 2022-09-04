import type { NextPage } from "next";
import Link from "next/link";
import { ProductItem } from "@/components/product-item/product-item";
import { Fragment } from "react";

const Product: NextPage = () => {
  return (
    <Fragment>
      <div
        style={{
          marginTop: "2rem",
          marginLeft: "5rem",
        }}
      >
        <Link href="/">
          <a
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: "rgb(0, 0, 0)",
              fontWeight: "200",
            }}
          >
            {"<"}&nbsp;&nbsp;&nbsp;Voltar
          </a>
        </Link>
      </div>
      <ProductItem />
    </Fragment>
  );
};

export default Product;
