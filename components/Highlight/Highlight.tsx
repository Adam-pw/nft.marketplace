import { useState } from "react";
import styles from "./Highlight.module.scss";
import Image from "next/image";

export default function Highlight() {
  const [time, setTime] = useState("");
  setTimeout(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <>
      <div className={styles.main}>
        <div className={styles.linear}>
          <div className={styles.card}>
            <div className={styles.creator}>
              <Image
                width={24}
                height={24}
                src="/images/highcreator.png"
                alt=""
              />
              Shroomie
            </div>
            <div className={styles.row}>
              <div>
                <div className={styles.head}>Magic Mashrooms</div>
                <button className={styles.button}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/nftcards/eye.png"
                    alt=""
                  />
                  See NFT
                </button>
              </div>
              <div className={styles.timmer}>
                <div className={styles.end}>Auction starts in:</div>
                <div className={styles.number}>{time.slice(0, -3)}</div>
                <div className={styles.unit}>
                  <div className="">Hours</div>
                  <div className="">Minutes</div>
                  <div className="">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
