import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.one}>
          <div className={styles.row1}>
            <div className={styles.row1_1}>NFT Marketplace</div>
            <div className={styles.row1_2}>
              NFT marketplace UI created<br></br> with Anima for Figma.
            </div>
            <div className={styles.row1_3}>Join our community</div>
            <div className={styles.row1_4}>
              <Image width={33} height={32} src="/images/footer/1.svg" alt="" />
              <Image width={33} height={32} src="/images/footer/2.svg" alt="" />
              <Image width={33} height={32} src="/images/footer/3.svg" alt="" />
              <Image width={33} height={32} src="/images/footer/4.svg" alt="" />
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.row2_1}>Explore</div>
            <div className={styles.row2_2}>Marketplace</div>
            <div className={styles.row2_3}>Rankings</div>
            <div className={styles.row2_4}>Connect a Wallet</div>
          </div>
          <div className={styles.row3}>
            <div className={styles.row3_1}>Join Our Weekly Digest</div>
            <div className={styles.row3_2}>
              Get exclusive promotions & updates <br></br>straight to your
              inbox.
            </div>
            <div className={styles.button}>
              <div>
                <input
                  className={styles.buttontext}
                 type="text" placeholder="Enter your email here"
                ></input>
              </div>
              <button className={styles.but}>
                <Image width={20} height={20} src="/images/mail.png" alt="" /> Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.line}>
            <hr></hr>
          </div>
          <div className={styles.cat}>
            Ⓒ NFT Market. Made By Adam Pithenwala
          </div>
        </div>
      </div>
    </>
  );
}
