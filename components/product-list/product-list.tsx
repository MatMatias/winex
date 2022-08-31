import type { ProductItemType } from "@/types/index";
import { useState } from "react";
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

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery(
    ["products", currentPage],
    () => httpRequest("GET", "products", { page: currentPage, limit: 9 }),
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
              <AddToChartButton>ADICIONAR</AddToChartButton>
            </ProductContainer>
          );
        })}
      </ProductListDataContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ProductListContainer>
  );
};
