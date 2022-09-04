import type { ProductItemType } from "@/types/index";
import create from "zustand";

interface ProductState {
  product?: ProductItemType;
  updateProduct: (newProduct: ProductItemType) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  product: undefined,
  updateProduct: (newProduct: ProductItemType | undefined) =>
    set(() => ({ product: newProduct })),
}));
