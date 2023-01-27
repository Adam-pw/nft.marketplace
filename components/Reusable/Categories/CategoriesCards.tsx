import styles from "./CategoriesCards.module.scss";

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
              <img src={cat.image2} alt="" />
            </div>
            <div className={styles.text}>{cat.name}</div>
          </div>
        );
      })}
    </>
  );
}
