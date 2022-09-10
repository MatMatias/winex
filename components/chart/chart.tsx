import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import {
  ChartContainer,
  ChartContainerHeader,
  ChartScreenContainer,
  FillerDiv,
} from "./chart-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductList } from "./product-list/index";
import { SendOrder } from "./send-order/index";

interface ChartProps {
  setIsChartOpen: Dispatch<SetStateAction<boolean>>;
}

export const Chart = ({ setIsChartOpen }: ChartProps) => {
  useEffect(() => {
    const htmlBody = document.getElementsByTagName("body")[0];
    htmlBody.classList.add("no-scroll");

    return () => {
      htmlBody.classList.remove("no-scroll");
    };
  }, []);

  const closeChart = () => {
    setIsChartOpen(false);
  };

  return (
    <ChartScreenContainer>
      <ChartContainer>
        <ChartContainerHeader>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ cursor: "pointer", fontSize: "30px" }}
              onClick={closeChart}
            />
          </span>
          <h1
            style={{
              color: "rgb(0, 0, 0)",
              fontWeight: "400",
              fontSize: "20px",
            }}
          >
            WineBox
          </h1>
        </ChartContainerHeader>
        <ProductList />
        <SendOrder />
      </ChartContainer>
      <FillerDiv onClick={closeChart}></FillerDiv>
    </ChartScreenContainer>
  );
};
