import type { ProductItemType } from "@/types/index";
import create from "zustand";

interface ChartListState {
  chartList: { product: ProductItemType; quantity: number }[];
  addProduct: (newItem: ProductItemType) => void;
  removeProduct: (itemToBeRemoved: ProductItemType) => void;
}

export const useChartListStore = create<ChartListState>()((set) => ({
  chartList: [],
  addProduct: (newItem: ProductItemType) =>
    set((state) => {
      for (let i = 0; i < state.chartList.length; ++i) {
        if (state.chartList[i].product.id === newItem.id) {
          state.chartList[i].quantity++;

          return { chartList: state.chartList };
        }
      }

      return {
        chartList: [...state.chartList, { product: newItem, quantity: 1 }],
      };
    }),
  removeProduct: (itemToBeRemoved: ProductItemType) =>
    set((state) => {
      const chartItemList = state.chartList;

      for (let i = 0; i < chartItemList.length; ++i) {
        if (chartItemList[i].product.id === itemToBeRemoved.id) {
          chartItemList[i].quantity--;

          if (chartItemList[i].product.id === 0) {
            chartItemList.splice(i, 1);
          }

          return { chartList: chartItemList };
        }
      }

      return { chartList: state.chartList };
    }),
}));
