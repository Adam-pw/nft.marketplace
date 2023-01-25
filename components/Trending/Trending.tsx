import Trending_Card from "components/Reusable/Trending_Cards/Trending_Card";
import styles from "./Trending.module.scss";

const trendingdata = [
  {
    mainimg: "/images/trending/1.svg",
    img1: "/images/trending/2.svg",
    img2: "/images/trending/3.svg",
    name: "DSGN Animals",
    creatorname: "MrFox",
    creatorimg: "/images/trending/5.svg",
  },
  {
    mainimg: "/images/trending/6.svg",
    img1: "/images/trending/7.svg",
    img2: "/images/trending/8.svg",
    name: "Magic Mushrooms",
    creatorname: "Shoormie",
    creatorimg: "/images/trending/9.svg",
  },
  {
    mainimg: "/images/trending/10.svg",
    img1: "/images/trending/11.svg",
    img2: "/images/trending/12.svg",
    name: "Disco Machines",
    creatorname: "BeKind2Robots",
    creatorimg: "/images/trending/13.svg",
  },
];

export default function Trending() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.head}>Trending Collection</div>
        <div className={styles.subhead}>
          Checkout our weekly updated trending collection.
        </div>
        <div className={styles.cards}>
          <Trending_Card datatrend={trendingdata} />
        </div>
      </div>
    </>
  );
}
