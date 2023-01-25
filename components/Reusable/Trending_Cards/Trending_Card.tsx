import styles from "./Trending_Card.module.scss";

interface card {
  datatrend: {
    mainimg: string;
    img1: string;
    img2: string;
    name: string;
    creatorname: string;
    creatorimg: string;
  }[];
}

export default function Trending_Card({ datatrend }: card) {
  return (
    <>
      {datatrend.map((data, index) => {
        return (
          <div className={styles.main} key={index}>
            <div className={styles.main_image}>
              <img src={data.mainimg} alt="" />
            </div>
            <div className={styles.main_three}>
              <div className="">
                <img src={data.img1} alt="" />
              </div>
              <div className="">
                <img src={data.img2} alt="" />
              </div>
              <div className="">
                <img src="/images/trending/4.svg" alt="" />
              </div>
            </div>
            <div className={styles.main_head}>{data.name}</div>
            <div className={styles.main_creator}>
              <img src={data.creatorimg} alt="" />
              <div className="">{data.creatorname}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
