
import Footer from "../Components/Footer";
import HeroHome from "../Components/HeroHome";
import Features from "../Components/Features";
import Head from "next/head";

export default function Component() {
  return (
    <>
    <Head>
        <title>Index.js</title>
    </Head>
      <main className="flex-grow">
        <HeroHome />
        <Features />
        {/* <Count /> */}
      </main>
      <Footer />
    </>
  );
}
