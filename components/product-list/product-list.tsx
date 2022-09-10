import type { ProductItemType } from "@/types/index";
import { Fragment } from "react";
import { useProductListStore, useChartListStore } from "@/store/index";
import { httpRequest } from "@/utils/index";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "./product-item/index";
import { Pagination } from "./pagination/index";
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
  const { params } = useProductListStore((store) => store);

  const { isLoading, isError, data, error } = useQuery(
    ["products", params.page, params.limit, params.name, params.priceRange],
    () => httpRequest("GET", "products", params),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <strong>Loading...</strong>;
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
        <Pagination totalPages={totalPages} />
      </ProductListContainer>
    </Fragment>
  );
};
