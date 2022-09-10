import { useChartListStore } from "@/store/chart-list-store";
import { ChartQuantity } from "./chart-items-counter-styles";

export const ChartItemsCounter = () => {
  const { chartList } = useChartListStore((store) => store);
  const quantity = chartList.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

  return <ChartQuantity>{quantity}</ChartQuantity>;
};
