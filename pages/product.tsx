import type { NextPage } from "next";
import { ProductItem, ProductItemMobile } from "@/components/product-item";
import { Fragment } from "react";
import { useBreakPoints } from "@/hooks/useBreakPoints";

const Product: NextPage = () => {
  const { isFirstBreakpoint, isSecondBreakpoint } = useBreakPoints();
  let isMobile: boolean = false;

  if (isFirstBreakpoint || isSecondBreakpoint) {
    isMobile = true;
  }

  return (
    <Fragment>{isMobile ? <ProductItemMobile /> : <ProductItem />}</Fragment>
  );
};

export default Product;
