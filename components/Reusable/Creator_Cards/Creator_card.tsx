import styles from "./Creator_Card.module.scss";

interface card {
  datacreator: {
    id: number;
    image: string;
    name: string;
    sales: number;
  }[];
}

export default function Creator_Card({ datacreator }: card) {
  return (
    <>
      {datacreator.map((data, index) => {
        return (
          <>
            <div>
              <div className={styles.main}>
                <div className={styles.number}>{data.id}</div>
                <div className={styles.imga}>
                  <img src={data.image} alt="" />
                </div>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.balance}>
                  <div className={styles.bal}>Total Sales:</div>
                  <div className={styles.balam}>{data.sales} ETH</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
