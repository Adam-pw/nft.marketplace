import NftCard from "components/Reusable/NftCard/NftCard";
import styles from "./nft.module.scss";
import Image from "next/image";

const nft = [
  {
    image: "/images/nftcards/1.png",
    name: "Distant Galaxy",
    creator: "Moon Dancer",
    profile: "/images/nftcards/2.png",
    price: 1.63,
    highestbid: 0.33,
  },
  {
    image: "/images/nftcards/3.png",
    name: "Life on Edena",
    creator: "NebulaKid",
    profile: "/images/hero_creator.png",
    price: 4.63,
    highestbid: 0.76,
  },
  {
    image: "/images/nftcards/5.png",
    name: "AstroFiction",
    creator: "Spaceone",
    profile: "/images/nftcards/6.png",
    price: 1.63,
    highestbid: 0.33,
  },
];

export default function Nft() {
  return (
    <>
      <div className={styles.main}>
        <div>
          <div className={styles.head}>Discover More NFTs</div>
          <div className={styles.subhead}>
            <div>Explore New Trending NFTs</div>
            <div>
              <button className={styles.subhead_button}>
                <Image width={20} height={20} src="/images/nftcards/eye.png" alt="" />
                See All
              </button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <NftCard data={nft} />
        </div>
      </div>
    </>
  );
}
