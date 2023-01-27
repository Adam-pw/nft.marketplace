import styles from "./Digest.module.scss";

export default function Digest() {
  return (
    <>
      <div className={styles.pad}>
        <div className={styles.main}>
          <div className={styles.image}>
            <img src="/images/digest.svg" alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.head}>Join Our Weekly Digest</div>
            <div className={styles.subhead}>
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </div>
            <div className={styles.button}>
              <div >
                <input className={styles.buttontext} value="Enter your email here"></input>
              </div>
              <button className={styles.but}>
                <img src="/images/mail.svg" alt="" /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
