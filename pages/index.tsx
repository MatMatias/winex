import type { NextPage } from "next";
import Head from "next/head";
import { ProductList } from "@/components/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine e-commerce</title>
        <meta name="description" content="Buy wines" />
      </Head>

      <ProductList />
    </div>
  );
};

export default Home;
