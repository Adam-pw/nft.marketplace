import styles from "./CategoriesCards.module.scss";
import Image from "next/image";

interface card {
  data: {
    image: string;
    image2: string;
    name: string;
  }[];
}

export default function CategoriesCards({ data }: card) {
  return (
    <>
      {data.map((cat, index) => {
        return (
          <div className={styles.main} key="index">
            <div className={styles.photomain}>
              <div
                className={styles.photo}
                style={{ background: `url(${cat.image})` }}
              ></div>
            </div>
            <div className={styles.photo2}>
              <Image width={100} height={100} src={cat.image2} alt="" />
            </div>
            <div className={styles.text}>{cat.name}</div>
          </div>
        );
      })}
    </>
  );
}
