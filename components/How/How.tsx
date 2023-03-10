import styles from "./How.module.scss";
import Image from "next/image";

const data = [
  {
    head: "Setup Your Wallet",
    text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    image: "/images/How/1.png",
  },
  {
    head: "Create Collection",
    text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    image: "/images/How/2.png",
  },
  {
    head: "Start Earning",
    text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    image: "/images/How/3.png",
  },
];

export default function How() {
  return (
    <>
      <div className={styles.pad}>
        <div className={styles.subhead}>How It Works</div>
        <div className={styles.subhead2}>Find Out How To Get Started</div>
        <div className={styles.row}>
          {data.map((how, index) => {
            return (
              <>
                <div className={styles.main}>
                  <Image width={250} height={250}src={how.image} alt="" />
                  <div className={styles.head}>{how.head}</div>
                  <div className={styles.text}>{how.text}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
