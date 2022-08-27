import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@/components/header/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine e-commerce</title>
        <meta name="description" content="Buy wines" />
      </Head>

      <Header />
      <main></main>
    </div>
  );
};

export default Home;
