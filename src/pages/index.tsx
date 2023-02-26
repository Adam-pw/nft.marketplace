import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Navbar from "components/Navbar/Navbar";
import HeroSection from "components/Hero Section/Hero";
import Trending from "components/Trending/Trending";
import Creators from "components/Creators/Creators";
import Crategories from "components/Categories/Categories";
import Nft from "components/Nft/Nft";
import How from "components/How/How";
import Digest from "components/Digest/Digest";
import Footer from "components/Footer/Footer";
import Highlight from "components/Highlight/Highlight";

const inter = Inter({ subsets: ["latin"] });

const creatorsdata = [
  {
    id: 1,
    image: "/images/Creators/1.svg",
    name: "Keepitreal",
    sales: 34.53,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <HeroSection />
        <iframe
          id="wallsio-iframe"
          src="https://my.walls.io/r4tnn?nobackground=1&amp;show_header=0"
          style={{ height: "70vh", width: "100%" }}
          loading="lazy"
          title="Hack This Fall 3.0 Social Wall"
          className={styles.twitter}
        ></iframe>
        <Trending />
        <Creators />
        <Crategories />
        <Nft />
        <Highlight />
        <How />
        <Digest />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
