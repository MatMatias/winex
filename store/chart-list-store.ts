import type { ProductItemType } from "@/types/index";
import create from "zustand";

interface ChartListState {
  chartList: { product: ProductItemType; quantity: number }[];
  increaseQuantity: (newItem: ProductItemType, quantity: number) => void;
  decreaseQuantity: (
    itemToBeRemoved: ProductItemType,
    quantity: number
  ) => void;
  remove: (itemToBeRemoved: ProductItemType) => void;
}

export const useChartListStore = create<ChartListState>()((set) => ({
  chartList: [],
  increaseQuantity: (newItem: ProductItemType, quantity: number = 1) =>
    set((state) => {
      for (let i = 0; i < state.chartList.length; ++i) {
        if (state.chartList[i].product.id === newItem.id) {
          state.chartList[i].quantity += quantity;

          return { chartList: state.chartList };
        }
      }

      return {
        chartList: [
          ...state.chartList,
          { product: newItem, quantity: quantity },
        ],
      };
    }),
  decreaseQuantity: (itemToBeRemoved: ProductItemType, quantity: number = 1) =>
    set((state) => {
      const chartItemList = state.chartList;

      for (let i = 0; i < chartItemList.length; ++i) {
        if (
          chartItemList[i].product.id === itemToBeRemoved.id &&
          chartItemList[i].quantity > 1
        ) {
          chartItemList[i].quantity -= quantity;
        }
      }

      return { chartList: state.chartList };
    }),
  remove: (itemToBeRemoved: ProductItemType) =>
    set((state) => {
      const newChartItemList = state.chartList;

      const itemToBeremovedIndex = newChartItemList.findIndex(
        (item) => item.product.id === itemToBeRemoved.id
      );
      newChartItemList.splice(itemToBeremovedIndex, 1);

      return { chartList: newChartItemList };
    }),
}));
