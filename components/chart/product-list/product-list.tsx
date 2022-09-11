import { useChartListStore } from "@/store/index";
import { Product } from "./product";
import { ChartProductList } from "./product-list-styles";

export const ProductList = () => {
  const { chartList } = useChartListStore((store) => store);

  if (chartList.length > 0) {
    return (
      <ChartProductList>
        {chartList.map((item) => {
          return <Product productItem={item} key={item.product.id} />;
        })}
      </ChartProductList>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
          height: "auto",
          width: "auto",
          backgroundColor: "rgb(245,245,245)",
        }}
      >
        <p
          style={{
            color: "rgb(192, 192, 192)",
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          {"=("}
        </p>
        <strong
          style={{
            fontWeight: "700",
            fontSize: "20px",
            color: "rgb(29, 29, 27)",
            textAlign: "center",
          }}
        >
          Você ainda não escolheu seus produtos
        </strong>
      </div>
    );
  }
};
