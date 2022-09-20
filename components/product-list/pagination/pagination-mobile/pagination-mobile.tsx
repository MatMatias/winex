import type { GetProductsParamsType } from "@/types/index";
import { useProductListStore } from "@/store/product-list-store";
import { MobilePaginationContainer } from "./pagination-mobile-styles";

interface PaginationMobileProps {
  totalItems: number;
}

function getMoreItems(
  amountMore: number,
  totalItems: number,
  params: GetProductsParamsType,
  updateParams: Function
): void {
  const { limit } = params;

  if (!limit) {
    throw "Error on getMoreItems function: limit is undefined";
  }

  let newLimit = limit + amountMore;

  if (newLimit >= totalItems) {
    newLimit = totalItems;
  }

  updateParams({ ...params, limit: newLimit });
}

export const PaginationMobile = ({ totalItems }: PaginationMobileProps) => {
  const { updateParams, params } = useProductListStore((store) => store);
  const { limit } = params;

  return (
    <MobilePaginationContainer>
      <button
        onClick={() => {
          const amountMore = 8;
          getMoreItems(amountMore, totalItems, params, updateParams);
        }}
      >
        Mostrar mais
      </button>
      <span>
        Exibindo <strong>{limit}</strong> de <strong>{totalItems}</strong>{" "}
        produtos no total
      </span>
    </MobilePaginationContainer>
  );
};
