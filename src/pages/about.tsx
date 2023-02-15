import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Nft from "components/Nft/Nft";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </>
  );
}
