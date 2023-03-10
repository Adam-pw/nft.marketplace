import styles from "./Trending_Card.module.scss";
import Image from "next/image";

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
              <Image width={330} height={330} src={data.mainimg} alt="" />
            </div>
            <div className={styles.main_three}>
              <div className={styles.three}>
                <Image width={100} height={100} src={data.img1} alt="" />
              </div>
              <div className={styles.three}>
                <Image width={100} height={100} src={data.img2} alt="" />
              </div>
              <div className={styles.three}>
                <Image width={100} height={100} src="/images/trending/4.png" alt="" />
              </div>
            </div>
            <div className={styles.main_head}>{data.name}</div>
            <div className={styles.main_creator}>
              <Image width={24} height={24} src={data.creatorimg} alt="" />
              <div className="">{data.creatorname}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
