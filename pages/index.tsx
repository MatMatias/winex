import type { NextPage } from "next";
import Head from "next/head";
import { Header, PriceFilter, ProductList } from "@/components/index";
import { MainContainer } from "@/styles/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine e-commerce</title>
        <meta name="description" content="Buy wines" />
      </Head>

      <MainContainer>
        <PriceFilter />
        <ProductList />
      </MainContainer>
    </div>
  );
};

export default Home;
