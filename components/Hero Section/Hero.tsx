import styles from "./Hero.module.scss";
import Image from "next/image";
import { inherits } from "util";

export default function HeroSection() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sub1}>
          <div className={styles.sub1_head}>
            Discover Digital Art & Collect NFTs
          </div>
          <div className={styles.sub1_subhead}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </div>
          <div className={styles.button}>
            <button className={styles.buttoninner}>
              <Image
                width={20}
                height={20}
                src="/images/hero_rocket.png"
                alt=""
              />
              Get Started
            </button>
          </div>
          <div>
            <div className={styles.sub1_trends}>
              <div className="">240k+</div>
              <div className="">100k+</div>
              <div className="">240k+</div>
            </div>
            <div className={styles.sub1_trends2}>
              <div className="">Total Sale</div>
              <div className="">Auctions</div>
              <div className="">Artists</div>
            </div>
          </div>
        </div>
        <div className={styles.sub2}>
          {/* <div className={styles.sub2_image}> */}
            <Image
              width={510}
              height={510}
              src="/images/heroanimationtransparentbck-2.gif"
              alt=""
            />
          {/* </div> */}
          {/* <div className={styles.sub2_text}>
            <div className={styles.sub2_texthead}>Space Walking</div>
            <div className={styles.sub2_textcreator}>
              <Image
                width={24}
                height={24}
                src="images/hero_creator.png"
                alt=""
              />
              <div className="">Animakid</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
