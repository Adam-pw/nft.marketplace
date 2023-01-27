import CategoriesCards from "components/Reusable/Categories/CategoriesCards";
import styles from "./Categories.module.scss";

const categories = [
  {
    image: "/images/Categories/1.svg",
    image2: "/images/Categories/2.svg",
    name: "Art",
  },
  {
    image: "/images/Categories/3.svg",
    image2: "/images/Categories/4.svg",
    name: "Collectibles",
  },
  {
    image: "/images/Categories/5.svg",
    image2: "/images/Categories/6.svg",
    name: "Music",
  },
  {
    image: "/images/Categories/7.svg",
    image2: "/images/Categories/8.svg",
    name: "Photography",
  },
];

const categories1 = [
  {
    image: "/images/Categories/10.svg",
    image2: "/images/Categories/9.svg",
    name: "Video",
  },
  {
    image: "/images/Categories/12.svg",
    image2: "/images/Categories/11.svg",
    name: "Utility",
  },
  {
    image: "/images/Categories/14.svg",
    image2: "/images/Categories/13.svg",
    name: "Sport",
  },
  {
    image: "/images/Categories/16.svg",
    image2: "/images/Categories/15.svg",
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
