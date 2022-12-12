import Head from "next/head";
import Category from "./components/Category/Category";
import Header from "./components/Header";
import TopRelated from "./components/TopRelated/TopRelated";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container my-4 text-gray-900 ">
          <Header name="Home Page" />
          <Category />
          <TopRelated />
        </div>
      </main>
    </div>
  );
}
