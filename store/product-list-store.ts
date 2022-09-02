import type { GetProductsParamsType } from "@/types/index";
import create from "zustand";

interface ProductListState {
  params: {
    page: number;
    limit: number;
    priceRange?: [number] | [number, number];
    name?: string;
  };
  updateParams: (params: GetProductsParamsType) => void;
}

export const useProductListStore = create<ProductListState>()((set) => ({
  params: {
    page: 1,
    limit: 9,
    priceRange: undefined,
    name: undefined,
  },
  updateParams: (newParams: GetProductsParamsType) =>
    set((state) => {
      return {
        params: {
          ...state.params,
          ...newParams,
        },
      };
    }),
}));
