import styles from "./NftCard.module.scss";

interface card {
  data: {
    image: string,
    name: string,
    creator: string,
    profile: string,
    price: number,
    highestbid: number,
  }[];
}

export default function NftCard({ data }: card) {
  return (
    <>
      {data.map((nft, index) => {
        return (
          <>
            <div className={styles.main}>
              <img
                className={styles.photo}
                src={nft.image}
                alt=""
              />

              <div className={styles.text}>
                <div className={styles.head}>{nft.name}</div>
                <div className={styles.creator}>
                  <img src={nft.profile} alt="" />
                  {nft.creator}
                </div>
                <div className={styles.title}>
                  <div className="">Price</div>
                  <div className="">Highest Bid</div>
                </div>
                <div className={styles.number}>
                  <div className="">{nft.price} ETH</div>
                  <div className="">{nft.highestbid} wETH</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
