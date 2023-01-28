import { useState } from "react";
import styles from "./Highlight.module.scss";

export default function Highlight() {
  const [time, setTime] = useState("");
  setTimeout(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: "url(/images/highlight.svg)" }}
      >
        <div className={styles.linear}>
          <div className={styles.card}>
            <div className={styles.creator}>
              <img src="/images/highcreator.svg" alt="" />
              Shroomie
            </div>
            <div className={styles.row}>
              <div>
                <div className={styles.head}>Magic Mashrooms</div>
                <button className={styles.button}>
                  <img src="/images/nftcards/eye.svg" alt="" />
                  See NFT
                </button>
              </div>
              <div className={styles.timmer}>
                <div className={styles.end}>Auction starts in:</div>
                <div className={styles.number}>
                  {time.slice(0,-3)}
                </div>
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
