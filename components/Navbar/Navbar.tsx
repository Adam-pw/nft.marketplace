import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <div className={styles.logo_photo}>
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className={styles.logo_text}>NFT Marketplace</div>
        </div>
        <div className={styles.nav}>
          <div className={styles.nav_sub}>Marketplace</div>
          <div className={styles.nav_sub}>Rankings</div>
          <div className={styles.nav_sub}>Connect a wallet</div>
          <div className={styles.nav_sub}>
            <button className={styles.nav_button}><img src="/images/user_signup.svg" alt="" />Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}
