import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.logo_photo}>
              <Image width={32} height={32} src="/images/logo.png" alt="" />
            </div>
            <div className={styles.logo_text}>NFT Marketplace</div>
          </div>
        </Link>
        <div className={styles.nav}>
          <div className={styles.nav_sub}>Marketplace</div>
          <div className={styles.nav_sub}>Rankings</div>
          <div className={styles.nav_sub}>Connect a wallet</div>
          <Link href="/signup">
            <div className={styles.nav_sub}>
              <button className={styles.nav_button}>
                <Image
                  width={20}
                  height={20}
                  src="/images/user_signup.png"
                  alt=""
                />
                Sign Up
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
