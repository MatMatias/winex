import type { NextPage } from "next";
import Head from "next/head";
import { Header, PriceFilter } from "@/components/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine e-commerce</title>
        <meta name="description" content="Buy wines" />
      </Head>

      <Header />
      <PriceFilter />
      <main></main>
    </div>
  );
};

export default Home;
