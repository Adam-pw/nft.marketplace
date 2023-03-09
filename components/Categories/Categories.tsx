import CategoriesCards from "components/Reusable/Categories/CategoriesCards";
import styles from "./Categories.module.scss";

const categories = [
  {
    image: "/images/Categories/1.png",
    image2: "/images/Categories/2.png",
    name: "Art",
  },
  {
    image: "/images/Categories/3.png",
    image2: "/images/Categories/4.png",
    name: "Collectibles",
  },
  {
    image: "/images/Categories/5.png",
    image2: "/images/Categories/6.png",
    name: "Music",
  },
  {
    image: "/images/Categories/7.png",
    image2: "/images/Categories/8.png",
    name: "Photography",
  },
];

const categories1 = [
  {
    image: "/images/Categories/10.png",
    image2: "/images/Categories/9.png",
    name: "Video",
  },
  {
    image: "/images/Categories/12.png",
    image2: "/images/Categories/11.png",
    name: "Utility",
  },
  {
    image: "/images/Categories/14.svg",
    image2: "/images/Categories/13.png",
    name: "Sport",
  },
  {
    image: "/images/Categories/16.png",
    image2: "/images/Categories/15.png",
    name: "Virtual Worlds",
  },
];

export default function Crategories() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.head}>Browse Categories</div>
        <div className={styles.mainsub}>
          <CategoriesCards data={categories} />
        </div>
        <div className={styles.mainsub}>
          <CategoriesCards data={categories1} />
        </div>
      </div>
    </>
  );
}
