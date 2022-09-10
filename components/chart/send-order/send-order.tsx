import { useChartListStore } from "@/store/chart-list-store";
import {
  SendOrderContainer,
  SendOrderPriceContainer,
  SendOrderButton,
} from "./send-order-styles";
import { formatCurrency } from "@/utils/format-currency";

export const SendOrder = () => {
  const { chartList } = useChartListStore((store) => store);

  const totalPrice = chartList.reduce(
    (totalPriceValue, currentItem) =>
      totalPriceValue + currentItem.quantity * currentItem.product.priceMember,
    0
  );

  return (
    <SendOrderContainer>
      <SendOrderPriceContainer>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "rgb(102, 102, 102)",
          }}
        >
          Total
        </span>
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "rgb(182, 17, 110)",
          }}
        >
          R$ {formatCurrency(totalPrice)}
        </span>
      </SendOrderPriceContainer>

      <SendOrderButton>Finalizar pedido</SendOrderButton>
    </SendOrderContainer>
  );
};
