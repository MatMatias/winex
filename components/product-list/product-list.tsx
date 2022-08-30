import type { ProductItemType } from "@/types/index";
import { httpRequest } from "@/utils/index";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "./product-item/index";
import {
  ProductListContainer,
  ProductListHeaderCounter,
  ProductListHeaderText,
  ProductListDataContainer,
  ProductContainer,
  AddToChartButton,
} from "./product-list-styles";

export const ProductList = () => {
  const { isLoading, isError, data, error } = useQuery(["products"], () =>
    httpRequest("GET", "products", { page: 1, limit: 9 })
  );

  if (isLoading) {
    return <strong>Loading...</strong>;
  }

  if (isError) {
    return <strong>Error: {JSON.stringify(error)}</strong>;
  }

  const { items, totalItems } = data;

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
    </ProductListContainer>
  );
};
