import type { ProductItemType } from "@/types/index";
import { Fragment, useEffect, useState } from "react";
import { useProductListStore, useChartListStore } from "@/store/index";
import { useBreakPoints } from "hooks/useBreakPoints";
import { httpRequest } from "@/utils/index";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "./product-item/index";
import { Pagination, PaginationMobile } from "./pagination/index";
import {
  ProductListContainer,
  ProductListHeaderCounter,
  ProductListHeaderText,
  ProductListDataContainer,
  ProductContainer,
  AddToChartButton,
} from "./product-list-styles";
import { Notification, notify } from "../notification";

export const ProductList = () => {
  const { increaseQuantity } = useChartListStore((store) => store);
  const { params, updateParams } = useProductListStore((store) => store);
  const { isFirstBreakpoint, isSecondBreakpoint } = useBreakPoints();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (isSecondBreakpoint || isFirstBreakpoint) {
      updateParams({ ...params, limit: 8 });
      setIsMobile(true);
    } else {
      updateParams({ ...params, limit: 9 });
    }
  }, []);

  const { isLoading, isError, data, error } = useQuery(
    ["products", params.page, params.limit, params.name, params.priceRange],
    () => httpRequest("GET", "products", params),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Fragment></Fragment>;
  }

  if (isError) {
    return <strong>Error: {JSON.stringify(error)}</strong>;
  }

  const { items, totalItems, totalPages } = data;

  return (
    <Fragment>
      <Notification />
      <ProductListContainer>
        <div>
          <ProductListHeaderCounter>{totalItems}</ProductListHeaderCounter>
          <ProductListHeaderText> produtos encontrados</ProductListHeaderText>
        </div>
        <ProductListDataContainer>
          {items.map((item: ProductItemType) => {
            return (
              <ProductContainer key={item.id}>
                <ProductItem productItem={item} />
                <AddToChartButton
                  onClick={() => {
                    increaseQuantity(item, 1);
                    notify(item.name, item.priceMember);
                  }}
                >
                  ADICIONAR
                </AddToChartButton>
              </ProductContainer>
            );
          })}
        </ProductListDataContainer>
        {isMobile ? (
          <PaginationMobile totalItems={totalItems} />
        ) : (
          <Pagination totalPages={totalPages} />
        )}
      </ProductListContainer>
    </Fragment>
  );
};
