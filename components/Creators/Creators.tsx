import Creator_Card from "components/Reusable/Creator_Cards/Creator_card";
import styles from "./Creators.module.scss";
import Image from "next/image";

const creatorsdata = [
  {
    id: 1,
    image: "/images/Creators/1.svg",
    name: "Keepitreal",
    sales: 34.53,
  },
  {
    id: 2,
    image: "/images/Creators/2.svg",
    name: "DigiLab",
    sales: 34.53,
  },
  {
    id: 3,
    image: "/images/Creators/3.svg",
    name: "GravityOne",
    sales: 34.53,
  },
  {
    id: 4,
    image: "/images/Creators/4.svg",
    name: "Juanie",
    sales: 34.53,
  },
];

const creatorsdata1 = [
  {
    id: 5,
    image: "/images/Creators/5.svg",
    name: "BlueWhale",
    sales: 34.53,
  },
  {
    id: 6,
    image: "/images/Creators/6.svg",
    name: "MrFox",
    sales: 34.53,
  },
  {
    id: 7,
    image: "/images/Creators/7.svg",
    name: "Shoormie",
    sales: 34.53,
  },
  {
    id: 8,
    image: "/images/Creators/8.svg",
    name: "Robotica",
    sales: 34.53,
  },
];

const creatorsdata2 = [
  {
    id: 9,
    image: "/images/Creators/9.svg",
    name: "RustyRobot",
    sales: 34.53,
  },
  {
    id: 10,
    image: "/images/Creators/10.svg",
    name: "AnimaKid",
    sales: 34.53,
  },
  {
    id: 11,
    image: "/images/Creators/11.svg",
    name: "Dotgu",
    sales: 34.53,
  },
  {
    id: 12,
    image: "/images/Creators/12.svg",
    name: "Ghiblier ",
    sales: 34.53,
  },
];
export default function Creators() {
  return (
    <>
      <div className={styles.pre}>
        <div>
          <div className={styles.head}>Top Creators</div>
          <div className={styles.subhead}>
            <div>Checkout Top Rated Creators on the NFT Marketplace</div>
            <div>
              <button className={styles.subhead_button}>
                <Image width={20} height={20} src="/images/Creators/13.svg" alt="" /> View Rankings
              </button>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <Creator_Card datacreator={creatorsdata} />
        </div>
        <div className={styles.main}>
          <Creator_Card datacreator={creatorsdata1} />
        </div>
        <div className={styles.main}>
          <Creator_Card datacreator={creatorsdata2} />
        </div>
      </div>
    </>
  );
}
