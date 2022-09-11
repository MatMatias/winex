import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useBreakPoints } from "hooks/useBreakPoints";
import {
  HeaderContainer,
  Div,
  IconsContainer,
  UserIcon,
  WineBoxIcon,
} from "./header-styles";
import { Chart } from "../chart";
import { SearchProduct } from "./search/index";
import { ChartItemsCounter } from "./chart-items-counter/index";

export const Header = () => {
  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);
  const { isFirstBreakpoint } = useBreakPoints();

  return (
    <Fragment>
      {isChartOpen && <Chart setIsChartOpen={setIsChartOpen} />}
      <HeaderContainer>
        <Div>
          {!isFirstBreakpoint && (
            <Link href="/">
              <Image
                src={"https://img.wine.com.br/logo/wine/black/wine.svg"}
                alt="Wine"
                width="108px"
                height="30px"
                style={{ cursor: "pointer" }}
              />
            </Link>
          )}
        </Div>
        <IconsContainer>
          <SearchProduct />
          <UserIcon></UserIcon>
          <WineBoxIcon
            onClick={() => setIsChartOpen((prevState) => !prevState)}
          >
            <ChartItemsCounter />
          </WineBoxIcon>
        </IconsContainer>
      </HeaderContainer>
    </Fragment>
  );
};
