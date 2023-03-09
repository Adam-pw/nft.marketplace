import Trending_Card from "components/Reusable/Trending_Cards/Trending_Card";
import styles from "./Trending.module.scss";

const trendingdata = [
  {
    mainimg: "/images/trending/1.png",
    img1: "/images/trending/2.png",
    img2: "/images/trending/3.png",
    name: "DSGN Animals",
    creatorname: "MrFox",
    creatorimg: "/images/trending/5.png",
  },
  {
    mainimg: "/images/trending/6.png",
    img1: "/images/trending/7.png",
    img2: "/images/trending/8.png",
    name: "Magic Mushrooms",
    creatorname: "Shoormie",
    creatorimg: "/images/trending/9.png",
  },
  {
    mainimg: "/images/trending/10.png",
    img1: "/images/trending/11.png",
    img2: "/images/trending/12.png",
    name: "Disco Machines",
    creatorname: "BeKind2Robots",
    creatorimg: "/images/trending/13.png",
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
